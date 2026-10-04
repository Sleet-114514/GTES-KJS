const DimensionMarker = Java.loadClass('com.gregtechceu.gtceu.api.data.DimensionMarker');
GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {
    event.create("ae2:spatial_storage")
        .iconSupplier(() => Item.of("kubejs:ae2_spatial_storage_marker").getItem())
        .tier(0)
})
