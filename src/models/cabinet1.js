/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MADE.COM (https://sketchfab.com/made-it)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/aveiro-cabinet-natural-oak-and-white-ffe67d3da21e473daacd2af1a390e8b2
title: Aveiro Cabinet, Natural Oak and White
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Edges } from '@react-three/drei'

export default function Cabinet1(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/aveiro_cabinet_natural_oak_and_white/scene.gltf')
    return (
        <group scale={[0.03, 0.03, 0.03]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 10.68, -20.81]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.GREY.geometry}
                            material={materials.GREY}>
                            <Edges
                                color='rgb(250, 250, 250)'
                                threshold={30} />
                        </mesh>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Material__27_1.geometry}
                            material={materials.EnvironmentAmbientLight}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.WOOD.geometry}
                            material={materials.WOOD}
                        />
                    </group>
                </group>
                <mesh castShadow receiveShadow geometry={nodes.FLOOR.geometry} material={materials.FLOOR} />
            </group>
        </group>
    )
}

useGLTF.preload('/aveiro_cabinet_natural_oak_and_white/scene.gltf')