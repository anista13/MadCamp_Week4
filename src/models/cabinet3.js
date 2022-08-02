/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Digital_MHC (https://sketchfab.com/Digital_MHC)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bedside-andrea-889d490a0fcb49ad9e9200ef8e370ab5
title: Bedside Andrea
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cabinet3(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/bedside_andrea/scene.gltf')
    return (
        <group scale={[0.04, 0.04, 0.04]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[8.77, 9.32, 10.31]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                        scale={[100, 100, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['1_low_Andrea_0'].geometry}
                            material={nodes['1_low_Andrea_0'].material}
                        />
                    </group>
                    <group
                        position={[8.73, 1.49, 9.97]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                        scale={[100, 100, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['2_low_Andrea_0'].geometry}
                            material={nodes['2_low_Andrea_0'].material}
                        />
                    </group>
                    <group
                        position={[8.77, 7.24, 10.31]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                        scale={[100, 100, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['3_low_Andrea_0'].geometry}
                            material={nodes['3_low_Andrea_0'].material}
                        />
                    </group>
                    <group
                        position={[8.77, 16.69, -14.17]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                        scale={[100, 100, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['4_low_Andrea_0'].geometry}
                            material={nodes['4_low_Andrea_0'].material}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['5_low_Andrea_0'].geometry}
                            material={nodes['5_low_Andrea_0'].material}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/bedside_andrea/scene.gltf')