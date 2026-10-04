const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    //GTMaterials.Redstone.setProperty(PropertyKey.INGOT, new $IngotProperty());
    event.create('spatial_air')
        .gas()
        .color(0xdecdf4)
        .secondaryColor(0xdecdf4)
    event.create('manba')
        .ingot()
        .liquid()
        .color(0xe7b75a)
        .secondaryColor(0xe7b75a)
        .formula("HeLiCoPtEr")
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_ROUND
        )
        .iconSet(GTMaterialIconSet.BRIGHT)
    event.create('gregtechnium')
        .ingot()
        .liquid()
        .gas().plasma()
        .color(0x00d4ce)
        .secondaryColor(0x00d4ce)
        .formula("Gt")
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.IS_MAGNETIC
        )
        .cableProperties(GTValues.VA[GTValues.MAX], 4096, 0, true)
        .toolStats(
            ToolProperty.Builder.of(32.0, 24.0, 4096, 6,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.WIRE_CUTTER,
                GTToolType.SCYTHE,
                GTToolType.KNIFE,
                GTToolType.BUTCHERY_KNIFE
            ]
        )
        .unbreakable()
        .magnetic()
        .build()
         )
        .iconSet(GTMaterialIconSet.METALLIC)
    event.create("axiom_solder")
        .ingot()
        .liquid()
        .color(0x2e9cca)
        .formula("∀‌")
})
