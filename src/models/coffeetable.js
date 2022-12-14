/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: robula72 (https://sketchfab.com/robula72)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/coffee-table-marina-52a1075958804cd18f96701ad3f49406
title: coffee table Marina
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Edges } from '@react-three/drei'

export default function CoffeeTable(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/coffee_table_marina/scene.gltf')
    return (
        <group scale={[0.005, 0.005, 0.005]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.kov_lakovan___er}>
                    {/* <Edges
                        color='rgb(200, 200, 200)'
                        threshold={25} /> */}
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.White_Matte}>
                    <Edges
                        color='rgb(200, 200, 200)'
                        threshold={25} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.material}>
                    {/* <Edges
                        color='rgb(200, 200, 200)'
                        threshold={25} /> */}
                </mesh>
            </group>
        </group>
    )
}

useGLTF.preload('/coffee_table_marina/scene.gltf')