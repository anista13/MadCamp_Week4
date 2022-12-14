/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: RubaQewar (https://sketchfab.com/RubaQewar)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bathroom-window-frame-1d02d3763cba479daf34afd669a26f68
title: Bathroom Window Frame
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function WindowFrame(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/bathroom_window_frame/scene.gltf')
    return (
        <group scale={[0.01, 0.01, 0.01]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 492.06, 0]} scale={[2000, 1000, 2000]}>
                        <group position={[0, -0.01, -0.01]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.polySurface10_unwrapChekcerShader10_0.geometry}
                                material={materials.unwrapChekcerShader10}
                            />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/bathroom_window_frame/scene.gltf')