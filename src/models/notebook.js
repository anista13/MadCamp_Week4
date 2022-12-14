/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: iSteven (https://sketchfab.com/Steven007)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/samsung-ativ-book-9-5e5725666200416cbf650ddce1f84eb4
title: Samsung Ativ Book 9
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Notebook(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/samsung_ativ_book_9/scene.gltf')
    const { actions } = useAnimations(animations, group)
    return (
        <group scale={[0.01, 0.01, 0.01]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0, 2.38, 22.98]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[100, 100, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.lid_gun_0.geometry}
                            material={nodes.lid_gun_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.lid_alum_0.geometry}
                            material={nodes.lid_alum_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.lid_samsung_0.geometry}
                            material={materials.samsung}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.lid_scr_0.geometry}
                            material={materials.material_2}
                        />
                    </group>
                    <group
                        position={[0, 1.72, -25.79]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[100, 100, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.body_gun_0.geometry}
                            material={nodes.body_gun_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.body_alum_0.geometry}
                            material={nodes.body_alum_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.body_flack_0.geometry}
                            material={materials.flack}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.body_tp_0.geometry}
                            material={materials.material_5}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.body_buton_0.geometry}
                            material={materials.buton}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.body_keys_0.geometry}
                            material={materials.keys}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/samsung_ativ_book_9/scene.gltf')