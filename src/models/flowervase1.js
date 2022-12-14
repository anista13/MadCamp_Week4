/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Dinesh Naidu (https://sketchfab.com/Dinesh_TS)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/flower-with-vase-f011d24ce98a4de49dbb68a2472a8580
title: Flower With Vase
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function FlowerVase1(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/flower_with_vase/scene.gltf')
    return (
        <group scale={[0.2, 0.2, 0.2]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Stylizedplaingrass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Stylizedplaingrass1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials['1597664249874-01']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.Seamless_marble_texture_75}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/flower_with_vase/scene.gltf')