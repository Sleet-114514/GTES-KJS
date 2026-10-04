ServerEvents.recipes(event => {

    //通用系列
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_ulv')
        .itemInputs("1x #gtceu:circuits/ulv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_ulv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_lv')
        .itemInputs("1x #gtceu:circuits/lv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_lv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_mv')
        .itemInputs("1x #gtceu:circuits/mv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_mv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_hv')
        .itemInputs("1x #gtceu:circuits/hv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_hv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_ev')
        .itemInputs("1x #gtceu:circuits/ev")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_ev")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_iv')
        .itemInputs("1x #gtceu:circuits/iv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_iv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_luv')
        .itemInputs("1x #gtceu:circuits/luv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_luv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_zpm')
        .itemInputs("1x #gtceu:circuits/zpm")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_zpm")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_uv')
        .itemInputs("1x #gtceu:circuits/uv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_uv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_uhv')
        .itemInputs("1x #gtceu:circuits/uhv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_uhv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_uev')
        .itemInputs("1x #gtceu:circuits/uev")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_uev")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_uiv')
        .itemInputs("1x #gtceu:circuits/uiv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_uiv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_uxv')
        .itemInputs("1x #gtceu:circuits/uxv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_uxv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_opv')
        .itemInputs("1x #gtceu:circuits/opv")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_opv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    event.recipes.gtceu.forming_press('kubejs:universal_circuit_max')
        .itemInputs("1x #gtceu:circuits/max")
        .circuit(24)
        .itemOutputs("1x kubejs:universal_circuit_max")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)

    //公理系列
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_ulv")
        .itemInputs("1x kubejs:axiom_printed_circuit_board",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_ulv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_ulv"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_lv")
        .itemInputs("1x kubejs:axiom_circuit_ulv",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_lv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_lv"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_mv")
        .itemInputs("1x kubejs:axiom_circuit_lv",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_mv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_mv"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_hv")
        .itemInputs("1x kubejs:axiom_circuit_mv",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_hv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_hv"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_ev")
        .itemInputs("1x kubejs:axiom_circuit_hv",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_ev")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_ev"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_iv")
        .itemInputs("1x kubejs:axiom_circuit_ev",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_iv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_iv"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_luv")
        .itemInputs("1x kubejs:axiom_circuit_iv",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_luv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_luv"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_zpm")
        .itemInputs("1x kubejs:axiom_circuit_luv",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_zpm")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_zpm"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_uv")
        .itemInputs("1x kubejs:axiom_circuit_zpm",
            "16x kubejs:axiom_cpu_chip",
            "16x kubejs:axiom_ram_chip",
            "16x kubejs:axiom_nand_chip",
            "16x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 1440")
        .itemOutputs("1x kubejs:axiom_circuit_uv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_uv"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(16))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_uhv")
        .itemInputs("1x kubejs:axiom_circuit_uv",
            "1x kubejs:axiom_cpu_chip",
            "1x kubejs:axiom_ram_chip",
            "1x kubejs:axiom_nand_chip",
            "1x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 2880")
        .itemOutputs("kubejs:axiom_circuit_uhv")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_uhv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(64))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_uev")
        .itemInputs("1x kubejs:axiom_circuit_uhv",
            "1x kubejs:axiom_cpu_chip",
            "1x kubejs:axiom_ram_chip",
            "1x kubejs:axiom_nand_chip",
            "1x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 2880")
        .itemOutputs("kubejs:axiom_circuit_uev")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_uev"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_uiv")
        .itemInputs("1x kubejs:axiom_circuit_uev",
            "1x kubejs:axiom_cpu_chip",
            "1x kubejs:axiom_ram_chip",
            "1x kubejs:axiom_nand_chip",
            "1x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 2880")
        .itemOutputs("kubejs:axiom_circuit_uiv")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_uiv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(64))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_uxv")
        .itemInputs("1x kubejs:axiom_circuit_uiv",
            "1x kubejs:axiom_cpu_chip",
            "1x kubejs:axiom_ram_chip",
            "1x kubejs:axiom_nand_chip",
            "1x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 2880")
        .itemOutputs("kubejs:axiom_circuit_uxv")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_uxv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(64))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_opv")
        .itemInputs("1x kubejs:axiom_circuit_uxv",
            "1x kubejs:axiom_cpu_chip",
            "1x kubejs:axiom_ram_chip",
            "1x kubejs:axiom_nand_chip",
            "1x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 2880")
        .itemOutputs("kubejs:axiom_circuit_opv")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_opv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(64))
    event.recipes.gtceu.assembly_line("kubejs:axiom_circuit_max")
        .itemInputs("1x kubejs:axiom_circuit_opv",
            "1x kubejs:axiom_cpu_chip",
            "1x kubejs:axiom_ram_chip",
            "1x kubejs:axiom_nand_chip",
            "1x kubejs:axiom_nor_chip"
        )
        .inputFluids("gtceu:axiom_solder 2880")
        .itemOutputs("kubejs:axiom_circuit_max")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:universal_circuit_max"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(64))
})
