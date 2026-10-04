ServerEvents.recipes( event => {

    //格镭-合金冶炼
    event.recipes.gtceu.alloy_blast_smelter("kubejs:gregtechnium")
       .itemInputs(
           "1x #forge:dusts/aluminium",
           "2x #forge:dusts/certus_quartz",
           "1x #forge:dusts/lapis",
           "1x gtceu:blue_alloy_dust"
       )
       .circuit(2)
       .outputFluids("gtceu:gregtechnium 720")
       .EUt(GTValues.VA[GTValues.HV])
       .duration(100)
       .blastFurnaceTemp(1200)

    //格镭-搅拌
    event.recipes.gtceu.mixer("kubejs:gregtechnium_dust")
        .itemInputs(
            "1x #forge:dusts/aluminium",
            "2x #forge:dusts/certus_quartz",
            "1x #forge:dusts/lapis",
            "1x gtceu:blue_alloy_dust"
        )
        .circuit(2)
        .itemOutputs("5x gtceu:gregtechnium_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    //手打锻铁
    event.smelting("kubejs:hot_iron_ingot", "minecraft:iron_ingot")
    event.shaped(
        Item.of("gtceu:wrought_iron_ingot", 1),
            [
                " H ",
                " I ",
                "   "
            ],
            {
                H: "#forge:tools/hammers",
                I: "kubejs:hot_iron_ingot"
            }
    )

})
