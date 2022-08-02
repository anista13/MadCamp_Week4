/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Helindu (https://sketchfab.com/Helindu)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/toilet-paper-roll-holder-with-cover-9e36f39d4f4c453d8e9a6506bbc7cc70
title: Toilet Paper Roll Holder With Cover
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ToiletPaper(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/toilet_paper_roll_holder_with_cover/scene.gltf')
    return (
        <group scale={[0.003, 0.003, 0.003]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[-7.62, 241.67, 12.06]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[77.29, 100, 77.29]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder_Material001_0.geometry}
                            material={materials['Material.001']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder_Material002_0.geometry}
                            material={materials['Material.002']}
                        />
                    </group>
                    <group position={[1.05, 366.44, 23.03]} rotation={[0, 0, 0]} scale={[4.37, 4.37, 157.85]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder001_Material_0.geometry}
                            material={nodes.Cylinder001_Material_0.material}
                        />
                    </group>
                    <group
                        position={[-43.22, 366.23, 11.98]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[45.43, 45.43, 45.43]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_Material_0.geometry}
                            material={nodes.Cube_Material_0.material}
                        />
                    </group>
                    <group
                        position={[1.03, 365.92, -55.63]}
                        rotation={[-Math.PI / 2, 1.07, 0]}
                        scale={[100, 114.18, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane_Material_0.geometry}
                            material={nodes.Plane_Material_0.material}
                        />
                    </group>
                    <group
                        position={[1.01, 366.23, 11.98]}
                        rotation={[Math.PI, 0, 0]}
                        scale={[10.49, 10.49, 16.7]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder003_Material005_0.geometry}
                            material={materials['Material.005']}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/toilet_paper_roll_holder_with_cover/scene.gltf')