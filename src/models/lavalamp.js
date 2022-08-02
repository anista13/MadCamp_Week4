/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: thelaughingdingo (https://sketchfab.com/thelaughingdingo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/groovy-lava-lamp-f2377c043ec1447d8e5e9cab0b9db20e
title: Groovy Lava Lamp
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function LavaLamp(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/groovy_lava_lamp/scene.gltf')
    return (
        <group ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={nodes.defaultMaterial.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_1.geometry}
                        material={nodes.defaultMaterial_1.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_2.geometry}
                        material={nodes.defaultMaterial_2.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_3.geometry}
                        material={nodes.defaultMaterial_3.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_4.geometry}
                        material={nodes.defaultMaterial_4.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_5.geometry}
                        material={nodes.defaultMaterial_5.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_6.geometry}
                        material={nodes.defaultMaterial_6.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_7.geometry}
                        material={nodes.defaultMaterial_7.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_8.geometry}
                        material={materials.glass1}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/groovy_lava_lamp/scene.gltf')