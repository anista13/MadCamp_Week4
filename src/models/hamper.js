/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: sleepyjoshua (https://sketchfab.com/sleepyjoshua)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/clothes-hamper-46e0b9cebba34f99964b44d6eaa839f3
title: Clothes Hamper
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Hamper(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/clothes_hamper/scene.gltf')
    return (
        <group ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} scale={[1, 1, 1]} />
                <group position={[0, 0, 1.62]}>
                    <group rotation={[0.42, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.HamperOutside001_0.geometry}
                            material={nodes.HamperOutside001_0.material}
                        />
                    </group>
                    <group rotation={[-0.42, 0, -Math.PI]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.HamperOutside002_0.geometry}
                            material={nodes.HamperOutside002_0.material}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.HamperCloth_0.geometry}
                        material={materials['Hamper.Cloth']}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/clothes_hamper/scene.gltf')