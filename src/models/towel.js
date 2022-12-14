/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SusanKing (https://sketchfab.com/krolzuzannapl)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/towel-2b3543bb1b924a36ac8b12d871477989
title: Towel
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Towel(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/towel/scene.gltf')
    return (
        <group scale={[2, 2, 2]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.hook}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.towel_blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.towel_white}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/towel/scene.gltf')