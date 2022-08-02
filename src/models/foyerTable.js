/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: HippoStance (https://sketchfab.com/hippostance)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/foyer-table-96a59672857c498da5c7ca82c793a6e5
title: Foyer Table
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function FoyerTable(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/foyer_table/scene.gltf')
    return (
        <group scale={[3, 3, 3]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FoyerTable_BrushedMetal_0.geometry}
                            material={nodes.FoyerTable_BrushedMetal_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FoyerTable_YellowPaintedWood_0.geometry}
                            material={nodes.FoyerTable_YellowPaintedWood_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FoyerTable_BluePaintedWood_0.geometry}
                            material={nodes.FoyerTable_BluePaintedWood_0.material}
                        />
                    </group>
                    <group position={[80.79, 48.14, 57.01]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.TableDoor_BrushedMetal_0.geometry}
                            material={nodes.TableDoor_BrushedMetal_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.TableDoor_YellowPaintedWood_0.geometry}
                            material={nodes.TableDoor_YellowPaintedWood_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.TableDoor_BluePaintedWood_0.geometry}
                            material={nodes.TableDoor_BluePaintedWood_0.material}
                        />
                    </group>
                    <group position={[-81.67, 23.28, 32.54]} rotation={[0, 0, -0.31]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_Cabinet_Book_Cabinet_0.geometry}
                            material={materials.Book_Cabinet}
                        />
                    </group>
                    <group position={[-78.24, 23.1, 34.05]} rotation={[0, 0, -0.31]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_Purge_Book_Purge_0.geometry}
                            material={materials.Book_Purge}
                        />
                    </group>
                    <group position={[-38.83, 22.7, 33.44]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_HiddenTruth_Book_HiddenTruth_0.geometry}
                            material={materials.Book_HiddenTruth}
                        />
                    </group>
                    <group position={[-43.86, 22.7, 33]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_Hobbit_Book_Hobbit_0.geometry}
                            material={materials.Book_Hobbit}
                        />
                    </group>
                    <group position={[-48.9, 22.7, 33.44]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_WitchingHour_Book_WitchingHour_0.geometry}
                            material={materials.Book_WitchingHour}
                        />
                    </group>
                    <group position={[-35.84, 45.46, 31.81]} rotation={[0, 0, 1.42]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_WhiteTrash_Book_WhiteTrash_0.geometry}
                            material={materials.Book_WhiteTrash}
                        />
                    </group>
                    <group position={[-36.07, 49.09, 30.73]} rotation={[0, 0, 1.41]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_BadRocks_Book_BadRocks_0.geometry}
                            material={materials.Book_BadRocks}
                        />
                    </group>
                    <group position={[-73.38, 23.64, 34.63]} rotation={[0, 0, -0.31]} scale={[1, 1, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_Fashion_Book_Fashion_0.geometry}
                            material={materials.Book_Fashion}
                        />
                    </group>
                    <group position={[-87.03, 23.64, 34.63]} rotation={[0, 0, -0.31]} scale={[1, 1, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_TheArt_Book_TheArt_0.geometry}
                            material={materials.Book_TheArt}
                        />
                    </group>
                    <group position={[-54.24, 22.7, 33]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_SunWitch_Book_SunWitch_0.geometry}
                            material={materials.Book_SunWitch}
                        />
                    </group>
                    <group position={[-60.31, 22.7, 34.27]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Book_ATurn_Book_ATurn_0.geometry}
                            material={materials.Book_ATurn}
                        />
                    </group>
                    <group position={[61.68, 76.19, 37.37]} rotation={[0, -0.16, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Magazine_GeoNat_Magazine_GeoNat_0.geometry}
                            material={materials.Magazine_GeoNat}
                        />
                    </group>
                    <group position={[62.25, 77.15, 37.23]} rotation={[0, -0.06, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Magazine_DixSept_Magazine_DixSept_0.geometry}
                            material={materials.Magazine_DixSept}
                        />
                    </group>
                    <group position={[60.24, 78.07, 38.38]} rotation={[0, -0.32, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Magazine_Prestige_Magazine_Prestige_0.geometry}
                            material={materials.Magazine_Prestige}
                        />
                    </group>
                    <group position={[54.18, 76.19, 13.85]} rotation={[0, -0.14, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plant_Small_Plant_Small_0.geometry}
                            material={materials.Plant_Small}
                        />
                    </group>
                    <group position={[57.43, 22.7, 30.99]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FileboxA_FileFolder_0.geometry}
                            material={nodes.FileboxA_FileFolder_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FileboxA_FileBox_0.geometry}
                            material={nodes.FileboxA_FileBox_0.material}
                        />
                    </group>
                    <group position={[57.34, 47.72, 30.68]} rotation={[0, -0.07, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FileboxB_FileFolder_0.geometry}
                            material={nodes.FileboxB_FileFolder_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FileboxB_FileBox_0.geometry}
                            material={nodes.FileboxB_FileBox_0.material}
                        />
                    </group>
                    <group position={[-21.23, 61.09, 25.55]} rotation={[0, -0.12, -0.02]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Notebook_Black_Paper_0.geometry}
                            material={nodes.Notebook_Black_Paper_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Notebook_Black_BrushedMetal_0.geometry}
                            material={nodes.Notebook_Black_BrushedMetal_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Notebook_Black_CoverBlack_0.geometry}
                            material={nodes.Notebook_Black_CoverBlack_0.material}
                        />
                    </group>
                    <group position={[-66.17, 75.5, 24.88]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plant_Large_Plant_Large_0.geometry}
                            material={materials.Plant_Large}
                        />
                    </group>
                    <group position={[48.65, 76.81, 31.84]} rotation={[0, 0.06, 1.81]} scale={[1, 1, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Pen_Click_PenBody_0.geometry}
                            material={materials.PenBody}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Pen_Click_PenShinyMetal_0.geometry}
                            material={materials.PenShinyMetal}
                        />
                    </group>
                    <group position={[47.01, 77.37, 35.93]} rotation={[0, -0.03, 2.24]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LipBalm_LipBalm_0.geometry}
                            material={materials.LipBalm}
                        />
                    </group>
                    <group position={[8.5, 62.06, 25.48]} rotation={[3.14, 0.01, -3.13]} scale={[1, 1, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Notebook_Purple_Paper_0.geometry}
                            material={nodes.Notebook_Purple_Paper_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Notebook_Purple_BrushedMetal_0.geometry}
                            material={nodes.Notebook_Purple_BrushedMetal_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Notebook_Purple_CoverPurple_0.geometry}
                            material={materials.CoverPurple}
                        />
                    </group>
                    <group position={[18.46, 76.25, 23.37]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bowl_WoodBowl_0.geometry}
                            material={materials.WoodBowl}
                        />
                    </group>
                    <group position={[15.25, 77.31, 24.33]} rotation={[0, 0, 0.06]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.QuarterA_Coins_0.geometry}
                            material={nodes.QuarterA_Coins_0.material}
                        />
                    </group>
                    <group position={[18.72, 77.32, 23.71]} rotation={[0, 0, -0.06]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Nickel_Coins_0.geometry}
                            material={nodes.Nickel_Coins_0.material}
                        />
                    </group>
                    <group position={[20.08, 76.96, 24.66]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Dime_Coins_0.geometry}
                            material={nodes.Dime_Coins_0.material}
                        />
                    </group>
                    <group position={[21.84, 77.17, 23.35]} rotation={[-Math.PI, 0, -0.02]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.PennyC_Coins_0.geometry}
                            material={nodes.PennyC_Coins_0.material}
                        />
                    </group>
                    <group position={[17.25, 76.91, 22.29]} rotation={[0, 0, -0.07]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.QuarterB_Coins_0.geometry}
                            material={nodes.QuarterB_Coins_0.material}
                        />
                    </group>
                    <group position={[19.99, 77.34, 25.51]} rotation={[0.18, 0, -0.14]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.PennyA_Coins_0.geometry}
                            material={nodes.PennyA_Coins_0.material}
                        />
                    </group>
                    <group position={[18.01, 77.32, 20.95]} rotation={[-0.23, -0.89, -0.01]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.PennyB_Coins_0.geometry}
                            material={nodes.PennyB_Coins_0.material}
                        />
                    </group>
                    <group position={[23.49, 78.28, 23.39]} rotation={[0.77, -1.31, 0.74]} scale={[1, 1, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.LaundryCard_LaundryCard_0.geometry}
                            material={materials.LaundryCard}
                        />
                    </group>
                    <group position={[-19.33, 44.29, 25.39]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Towel_Red_ClothRed_0.geometry}
                            material={materials.ClothRed}
                        />
                    </group>
                    <group
                        position={[4.7, 43.41, 25.85]}
                        rotation={[Math.PI, 0, Math.PI / 2]}
                        scale={[1, 1, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Towel_Green_ClothGreen_0.geometry}
                            material={materials.ClothGreen}
                        />
                    </group>
                    <group position={[-42.04, 76.14, 18.24]} rotation={[0, 0.22, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Calendar_CoverBlack_0.geometry}
                            material={nodes.Calendar_CoverBlack_0.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Calendar_Calendar_0.geometry}
                            material={materials.Calendar}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/foyer_table/scene.gltf')