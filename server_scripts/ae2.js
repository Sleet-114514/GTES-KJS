ServerEvents.recipes( event => {

    //钠充能赛特斯石英水晶-大化反
    event.recipes.gtceu.large_chemical_reactor("kubejs:charged_certus_quartz_crystal_sodium")
        .itemInputs(
            "24x #forge:dusts/certus_quartz"
        )
        .circuit(1)
        .notConsumable("1x #forge:dusts/sodium")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("64x ae2:charged_certus_quartz_crystal")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    //充能赛特斯石英水晶-大化反
    event.recipes.gtceu.large_chemical_reactor("kubejs:charged_certus_quartz_crystal")
        .itemInputs(
            "24x #forge:dusts/certus_quartz"
        )
        .circuit(2)
        .inputFluids("minecraft:water 1000")
        .itemOutputs("64x ae2:charged_certus_quartz_crystal")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    //福鲁伊克斯-大化反
    event.recipes.gtceu.large_chemical_reactor('kubejs:fluix_crystal')
        .itemInputs(
            "16x ae2:charged_certus_quartz_crystal",
            "16x minecraft:quartz",
            "16x minecraft:redstone"
        )
        .inputFluids("minecraft:water 1000")
        .itemOutputs("64x ae2:fluix_crystal")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    //移除天空绝缘树脂及MEGA能量存储外壳
    event.remove({ id: "appflux:mega/fe_housing" })
    event.remove({ id: "appflux:mega/sky_resin" })

    //移除ECO的非格雷无限存储组件配方
    event.remove({ id: "neoecoae:integrated_working_station/eco_infinite_cell_component" })

    //移除BetterGTAE的无限存储
    event.remove({ id: "gtceu:research_station/1x_ae2_fluid_storage_cell_256k" })
    event.remove({ id: "bettergtae:assembly_line/fluid_infinity_cell" })
    event.remove({ id: "bettergtae:assembly_line/item_infinity_cell" })
    event.remove({ id: "gtceu:research_station/1x_ae2_item_storage_cell_256k" })

    //移除EAEP的“吞噬万籁的寂静”（BigInteger级无限存储）
    event.remove({ id :"extendedae_plus:infinity_biginteger_cell" })
    event.remove({ id :"extendedae_plus:c-h716" })
    event.remove({ id :"extendedae_plus:xbai" })
    event.remove({ id :"extendedae_plus:core/compat/infinity_core_3" })
    event.remove({ id :"extendedae_plus:core/quantum_storage_core" })
    event.remove({ id :"extendedae_plus:core/quantum_storage_core_3" })
    event.remove({ id :"extendedae_plus:core/quantum_storage_core_2" })
    event.remove({ id :"extendedae_plus:core/quantum_storage_core_1" })
    event.remove({ id :"extendedae_plus:core/basic_core" })
    event.remove({ id :"extendedae_plus:core/compat/storage_core" })
    event.remove({ id :"extendedae_plus:core/storage_core_3" })
    event.remove({ id :"extendedae_plus:core/storage_core_2" })
    event.remove({ id :"extendedae_plus:core/storage_core_1" })
    event.remove({ id :"extendedae_plus:core/compat/energy_storage_core" })
    event.remove({ id :"extendedae_plus:core/energy_storage_core_3" })
    event.remove({ id :"extendedae_plus:core/energy_storage_core_2" })
    event.remove({ id :"extendedae_plus:core/energy_storage_core_1" })
    event.remove({ id :"extendedae_plus:core/spatial_core" })
    event.remove({ id :"extendedae_plus:core/spatial_core_3" })
    event.remove({ id :"extendedae_plus:core/spatial_core_2" })
    event.remove({ id :"extendedae_plus:core/spatial_core_1" })

    //移除AE2外壳配方
    event.remove({ id: "appliedcreate:andesite_stress_cell_housing" })
    event.remove({ id: "appliedcreate:brass_stress_cell_housing" })
    event.remove({ id: "ae2:network/cells/fluid_cell_housing" })
    event.remove({ id: "ae2:network/cells/item_cell_housing" })
    event.remove({ id: "appflux:fe_housing" })

    //ME物品存储外壳
    event.shaped(
        Item.of("ae2:item_cell_housing", 1),
            [
                'ABC',
                'D D',
                'CEF'
            ],
            {
                A: "#gtceu:crafting_tools/wrenches",
                B: "#forge:glass_panes/colorless",
                C: "#forge:screws/brass",
                D: "#forge:plates/iron",
                E: "#forge:plates/aluminium",
                F: "#gtceu:crafting_tools/screwdrivers"
            }
    )

    //ME流体存储外壳
    event.shaped(
        Item.of("ae2:fluid_cell_housing", 1),
            [
                'ABC',
                'D D',
                'CEF'
            ],
            {
                A: "#gtceu:crafting_tools/wrenches",
                B: "#forge:glass_panes/colorless",
                C: "#forge:screws/brass",
                D: "#forge:plates/copper",
                E: "#forge:plates/aluminium",
                F: "#gtceu:crafting_tools/screwdrivers"
            }
    )

    //ME能量存储外壳
    event.shaped(
        Item.of("appflux:fe_cell_housing", 1),
            [
                'ABC',
                'D D',
                'CEF'
            ],
            {
                A: "#gtceu:crafting_tools/wrenches",
                B: "#forge:glass_panes/colorless",
                C: "#forge:screws/brass",
                D: "#forge:plates/polyvinyl_chloride",
                E: "#forge:plates/aluminium",
                F: "#gtceu:crafting_tools/screwdrivers"
            }
    )

    //ME应力存储外壳
    event.shaped(
        Item.of("appliedcreate:brass_stress_cell_housing", 1),
            [
                'ABC',
                'D D',
                'CEF'
            ],
            {
                A: "#gtceu:crafting_tools/wrenches",
                B: "#forge:glass_panes/colorless",
                C: "#forge:screws/brass",
                D: "#forge:plates/brass",
                E: "#forge:plates/aluminium",
                F: "#gtceu:crafting_tools/screwdrivers"
            }
    )
})
