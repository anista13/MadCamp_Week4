/*
  To use it, simply declare:
  `const post = new PostFX(rendering);`
  
  Then on update, instead of:
  `rendering.render(scene, camera);`
  replace with:
  `post.render(scene, camera);`
*/
import {
    WebGLRenderTarget,
    OrthographicCamera,
    RGBAFormat,
    BufferGeometry,
    BufferAttribute,
    Mesh,
    Scene,
    RawShaderMaterial,
    Vector2,
    LinearFilter,
    NearestFilter
} from 'three'

const vertexShader = `precision highp float;
    attribute vec2 position;
    void main() {
      // Look ma! no projection matrix multiplication,
      // because we pass the values directly in clip space coordinates.
      gl_Position = vec4(position, 1.0, 1.0);
    }`

const fragmentShader = `precision highp float;
    uniform sampler2D uScene;
    uniform vec2 uResolution;
    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      vec3 color = vec3(uv, 1.0);
      color = texture2D(uScene, uv).rgb;
      // Do your cool postprocessing here
    //   color.r += sin(uv.x * 50.0);
    //   if (color == vec3(0.0, 0.0, 0.0)) gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      gl_FragColor = min(vec4(color + vec3(0.1, 0.1, 0.1), 1.0), vec4(1.0, 1.0, 1.0, 1.0));
    }`

export default class PostFX {
    constructor(renderer) {
        // console.log(renderer)
        this.renderer = renderer
        this.scene = new Scene()
        // three.js for .render() wants a camera, even if we're not using it :(
        this.dummyCamera = new OrthographicCamera()
        this.geometry = new BufferGeometry()

        // Triangle expressed in clip space coordinates
        const vertices = new Float32Array(
            [-1.0, -1.0, 3.0, -1.0, -1.0, 3.0]
            // [-0.5, 0, 3.0, -1.0, -1.0, 3.0]
        )

        this.geometry.setAttribute('position', new BufferAttribute(vertices, 2))

        this.resolution = new Vector2()
        this.renderer.getDrawingBufferSize(this.resolution)

        this.target = new WebGLRenderTarget(
            this.resolution.x / 3, this.resolution.y / 3,
            {
                minFilter: LinearFilter,
                magFilter: NearestFilter,
                format: RGBAFormat,
                stencilBuffer: false,
                depthBuffer: true
            })

        this.material = new RawShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms: {
                uScene: { value: this.target.texture },
                uResolution: { value: this.resolution }
            }
        })

        // TODO: handle the resize -> update uResolution uniform and this.target.setSize()

        this.triangle = new Mesh(this.geometry, this.material)
        // Our triangle will be always on screen, so avoid frustum culling checking
        this.triangle.frustumCulled = false
        this.scene.add(this.triangle)
    }

    render(scene, camera) {
        this.renderer.setRenderTarget(this.target)
        this.renderer.render(scene, camera)
        this.renderer.setRenderTarget(null)
        this.renderer.render(this.scene, this.dummyCamera)
    }
}
