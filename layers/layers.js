var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_test_0 = new ol.format.GeoJSON();
var features_test_0 = format_test_0.readFeatures(json_test_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_test_0.addFeatures(features_test_0);var lyr_test_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_0, 
                style: style_test_0,
                title: '<img src="styles/legend/test_0.png" /> test'
            });

lyr_test_0.setVisible(true);
var layersList = [baseLayer,lyr_test_0];
lyr_test_0.set('fieldAliases', {'id': 'id', });
lyr_test_0.set('fieldImages', {'id': 'TextEdit', });
lyr_test_0.set('fieldLabels', {'id': 'no label', });
lyr_test_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});