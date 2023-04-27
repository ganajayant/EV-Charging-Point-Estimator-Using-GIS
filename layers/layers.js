var wms_layers = [];

var format_S20200010035Roads_0 = new ol.format.GeoJSON();
var features_S20200010035Roads_0 = format_S20200010035Roads_0.readFeatures(json_S20200010035Roads_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010035Roads_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010035Roads_0.addFeatures(features_S20200010035Roads_0);
var lyr_S20200010035Roads_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010035Roads_0, 
                style: style_S20200010035Roads_0,
                interactive: true,
                title: 'S20200010035 — Roads'
            });
var format_S20200010146Roads_1 = new ol.format.GeoJSON();
var features_S20200010146Roads_1 = format_S20200010146Roads_1.readFeatures(json_S20200010146Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010146Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010146Roads_1.addFeatures(features_S20200010146Roads_1);
var lyr_S20200010146Roads_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010146Roads_1, 
                style: style_S20200010146Roads_1,
                interactive: true,
                title: 'S20200010146 — Roads'
            });
var format_S20200010199ExternalRoads_2 = new ol.format.GeoJSON();
var features_S20200010199ExternalRoads_2 = format_S20200010199ExternalRoads_2.readFeatures(json_S20200010199ExternalRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010199ExternalRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010199ExternalRoads_2.addFeatures(features_S20200010199ExternalRoads_2);
var lyr_S20200010199ExternalRoads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010199ExternalRoads_2, 
                style: style_S20200010199ExternalRoads_2,
                interactive: true,
                title: 'S20200010199 — External Roads'
            });
var format_S20200010146InnerRoad_3 = new ol.format.GeoJSON();
var features_S20200010146InnerRoad_3 = format_S20200010146InnerRoad_3.readFeatures(json_S20200010146InnerRoad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010146InnerRoad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010146InnerRoad_3.addFeatures(features_S20200010146InnerRoad_3);
var lyr_S20200010146InnerRoad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010146InnerRoad_3, 
                style: style_S20200010146InnerRoad_3,
                interactive: true,
                title: 'S20200010146 — Inner Road'
            });
var format_S20200010199InternalRoads_4 = new ol.format.GeoJSON();
var features_S20200010199InternalRoads_4 = format_S20200010199InternalRoads_4.readFeatures(json_S20200010199InternalRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010199InternalRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010199InternalRoads_4.addFeatures(features_S20200010199InternalRoads_4);
var lyr_S20200010199InternalRoads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010199InternalRoads_4, 
                style: style_S20200010199InternalRoads_4,
                interactive: true,
                title: 'S20200010199 — Internal Roads'
            });
var format_S20200010233Road_5 = new ol.format.GeoJSON();
var features_S20200010233Road_5 = format_S20200010233Road_5.readFeatures(json_S20200010233Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010233Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010233Road_5.addFeatures(features_S20200010233Road_5);
var lyr_S20200010233Road_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010233Road_5, 
                style: style_S20200010233Road_5,
                interactive: true,
                title: 'S20200010233 — Road'
            });
var format_Buffered_6 = new ol.format.GeoJSON();
var features_Buffered_6 = format_Buffered_6.readFeatures(json_Buffered_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_6.addFeatures(features_Buffered_6);
var lyr_Buffered_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_6, 
                style: style_Buffered_6,
                interactive: true,
                title: '<img src="styles/legend/Buffered_6.png" /> Buffered'
            });
var format_Buffered_7 = new ol.format.GeoJSON();
var features_Buffered_7 = format_Buffered_7.readFeatures(json_Buffered_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_7.addFeatures(features_Buffered_7);
var lyr_Buffered_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_7, 
                style: style_Buffered_7,
                interactive: true,
                title: '<img src="styles/legend/Buffered_7.png" /> Buffered'
            });
var format_Buffered_8 = new ol.format.GeoJSON();
var features_Buffered_8 = format_Buffered_8.readFeatures(json_Buffered_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_8.addFeatures(features_Buffered_8);
var lyr_Buffered_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_8, 
                style: style_Buffered_8,
                interactive: true,
                title: '<img src="styles/legend/Buffered_8.png" /> Buffered'
            });
var format_Buffered_9 = new ol.format.GeoJSON();
var features_Buffered_9 = format_Buffered_9.readFeatures(json_Buffered_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_9.addFeatures(features_Buffered_9);
var lyr_Buffered_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_9, 
                style: style_Buffered_9,
                interactive: true,
                title: '<img src="styles/legend/Buffered_9.png" /> Buffered'
            });
var format_Buffered_10 = new ol.format.GeoJSON();
var features_Buffered_10 = format_Buffered_10.readFeatures(json_Buffered_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_10.addFeatures(features_Buffered_10);
var lyr_Buffered_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_10, 
                style: style_Buffered_10,
                interactive: true,
                title: '<img src="styles/legend/Buffered_10.png" /> Buffered'
            });
var format_S35_11 = new ol.format.GeoJSON();
var features_S35_11 = format_S35_11.readFeatures(json_S35_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S35_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S35_11.addFeatures(features_S35_11);
var lyr_S35_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S35_11, 
                style: style_S35_11,
                interactive: true,
                title: '<img src="styles/legend/S35_11.png" /> S35'
            });
var format_Buffered_12 = new ol.format.GeoJSON();
var features_Buffered_12 = format_Buffered_12.readFeatures(json_Buffered_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_12.addFeatures(features_Buffered_12);
var lyr_Buffered_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_12, 
                style: style_Buffered_12,
                interactive: true,
                title: '<img src="styles/legend/Buffered_12.png" /> Buffered'
            });
var format_Buffered_13 = new ol.format.GeoJSON();
var features_Buffered_13 = format_Buffered_13.readFeatures(json_Buffered_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_13.addFeatures(features_Buffered_13);
var lyr_Buffered_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_13, 
                style: style_Buffered_13,
                interactive: true,
                title: '<img src="styles/legend/Buffered_13.png" /> Buffered'
            });
var format_Buffered_14 = new ol.format.GeoJSON();
var features_Buffered_14 = format_Buffered_14.readFeatures(json_Buffered_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_14.addFeatures(features_Buffered_14);
var lyr_Buffered_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_14, 
                style: style_Buffered_14,
                interactive: true,
                title: '<img src="styles/legend/Buffered_14.png" /> Buffered'
            });
var format_S35_15 = new ol.format.GeoJSON();
var features_S35_15 = format_S35_15.readFeatures(json_S35_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S35_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S35_15.addFeatures(features_S35_15);
var lyr_S35_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S35_15, 
                style: style_S35_15,
                interactive: true,
                title: '<img src="styles/legend/S35_15.png" /> S35'
            });
var format_Buffered_16 = new ol.format.GeoJSON();
var features_Buffered_16 = format_Buffered_16.readFeatures(json_Buffered_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_16.addFeatures(features_Buffered_16);
var lyr_Buffered_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_16, 
                style: style_Buffered_16,
                interactive: true,
                title: '<img src="styles/legend/Buffered_16.png" /> Buffered'
            });
var format_Buffered_17 = new ol.format.GeoJSON();
var features_Buffered_17 = format_Buffered_17.readFeatures(json_Buffered_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_17.addFeatures(features_Buffered_17);
var lyr_Buffered_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_17, 
                style: style_Buffered_17,
                interactive: true,
                title: '<img src="styles/legend/Buffered_17.png" /> Buffered'
            });
var format_S20200010035Hotels_18 = new ol.format.GeoJSON();
var features_S20200010035Hotels_18 = format_S20200010035Hotels_18.readFeatures(json_S20200010035Hotels_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010035Hotels_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010035Hotels_18.addFeatures(features_S20200010035Hotels_18);
var lyr_S20200010035Hotels_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010035Hotels_18, 
                style: style_S20200010035Hotels_18,
                interactive: true,
                title: 'S20200010035 — Hotels'
            });
var format_S20200010146Hotels_19 = new ol.format.GeoJSON();
var features_S20200010146Hotels_19 = format_S20200010146Hotels_19.readFeatures(json_S20200010146Hotels_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010146Hotels_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010146Hotels_19.addFeatures(features_S20200010146Hotels_19);
var lyr_S20200010146Hotels_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010146Hotels_19, 
                style: style_S20200010146Hotels_19,
                interactive: true,
                title: 'S20200010146 — Hotels'
            });
var format_S20200010199Hotels_20 = new ol.format.GeoJSON();
var features_S20200010199Hotels_20 = format_S20200010199Hotels_20.readFeatures(json_S20200010199Hotels_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010199Hotels_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010199Hotels_20.addFeatures(features_S20200010199Hotels_20);
var lyr_S20200010199Hotels_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010199Hotels_20, 
                style: style_S20200010199Hotels_20,
                interactive: true,
                title: 'S20200010199 — Hotels'
            });
var format_S20200010233Hotels_21 = new ol.format.GeoJSON();
var features_S20200010233Hotels_21 = format_S20200010233Hotels_21.readFeatures(json_S20200010233Hotels_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010233Hotels_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010233Hotels_21.addFeatures(features_S20200010233Hotels_21);
var lyr_S20200010233Hotels_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010233Hotels_21, 
                style: style_S20200010233Hotels_21,
                interactive: true,
                title: 'S20200010233 — Hotels'
            });
var format_91_22 = new ol.format.GeoJSON();
var features_91_22 = format_91_22.readFeatures(json_91_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_91_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_91_22.addFeatures(features_91_22);
var lyr_91_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_91_22, 
                style: style_91_22,
                interactive: true,
                title: '<img src="styles/legend/91_22.png" /> 91'
            });
var format_92_23 = new ol.format.GeoJSON();
var features_92_23 = format_92_23.readFeatures(json_92_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_92_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_92_23.addFeatures(features_92_23);
var lyr_92_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_92_23, 
                style: style_92_23,
                interactive: true,
                title: '<img src="styles/legend/92_23.png" /> 92'
            });
var format_93_24 = new ol.format.GeoJSON();
var features_93_24 = format_93_24.readFeatures(json_93_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_93_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_93_24.addFeatures(features_93_24);
var lyr_93_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_93_24, 
                style: style_93_24,
                interactive: true,
                title: '<img src="styles/legend/93_24.png" /> 93'
            });
var format_94_25 = new ol.format.GeoJSON();
var features_94_25 = format_94_25.readFeatures(json_94_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_94_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_94_25.addFeatures(features_94_25);
var lyr_94_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_94_25, 
                style: style_94_25,
                interactive: true,
                title: '<img src="styles/legend/94_25.png" /> 94'
            });
var format_91_26 = new ol.format.GeoJSON();
var features_91_26 = format_91_26.readFeatures(json_91_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_91_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_91_26.addFeatures(features_91_26);
var lyr_91_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_91_26, 
                style: style_91_26,
                interactive: true,
                title: '<img src="styles/legend/91_26.png" /> 91'
            });
var format_92_27 = new ol.format.GeoJSON();
var features_92_27 = format_92_27.readFeatures(json_92_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_92_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_92_27.addFeatures(features_92_27);
var lyr_92_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_92_27, 
                style: style_92_27,
                interactive: true,
                title: '<img src="styles/legend/92_27.png" /> 92'
            });
var format_93_28 = new ol.format.GeoJSON();
var features_93_28 = format_93_28.readFeatures(json_93_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_93_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_93_28.addFeatures(features_93_28);
var lyr_93_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_93_28, 
                style: style_93_28,
                interactive: true,
                title: '<img src="styles/legend/93_28.png" /> 93'
            });
var format_94_29 = new ol.format.GeoJSON();
var features_94_29 = format_94_29.readFeatures(json_94_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_94_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_94_29.addFeatures(features_94_29);
var lyr_94_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_94_29, 
                style: style_94_29,
                interactive: true,
                title: '<img src="styles/legend/94_29.png" /> 94'
            });
var format_S20200010199EVstations_30 = new ol.format.GeoJSON();
var features_S20200010199EVstations_30 = format_S20200010199EVstations_30.readFeatures(json_S20200010199EVstations_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010199EVstations_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010199EVstations_30.addFeatures(features_S20200010199EVstations_30);
var lyr_S20200010199EVstations_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010199EVstations_30, 
                style: style_S20200010199EVstations_30,
                interactive: true,
                title: 'S20200010199 — EV stations'
            });
var format_S20200010233EVChargingPoints_31 = new ol.format.GeoJSON();
var features_S20200010233EVChargingPoints_31 = format_S20200010233EVChargingPoints_31.readFeatures(json_S20200010233EVChargingPoints_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010233EVChargingPoints_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010233EVChargingPoints_31.addFeatures(features_S20200010233EVChargingPoints_31);
var lyr_S20200010233EVChargingPoints_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010233EVChargingPoints_31, 
                style: style_S20200010233EVChargingPoints_31,
                interactive: true,
                title: 'S20200010233 — EV Charging Points'
            });
var format_S20200010146Charge_32 = new ol.format.GeoJSON();
var features_S20200010146Charge_32 = format_S20200010146Charge_32.readFeatures(json_S20200010146Charge_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010146Charge_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010146Charge_32.addFeatures(features_S20200010146Charge_32);
var lyr_S20200010146Charge_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010146Charge_32, 
                style: style_S20200010146Charge_32,
                interactive: true,
                title: 'S20200010146 — Charge'
            });
var format_S20200010035Charging_Points_33 = new ol.format.GeoJSON();
var features_S20200010035Charging_Points_33 = format_S20200010035Charging_Points_33.readFeatures(json_S20200010035Charging_Points_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20200010035Charging_Points_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20200010035Charging_Points_33.addFeatures(features_S20200010035Charging_Points_33);
var lyr_S20200010035Charging_Points_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S20200010035Charging_Points_33, 
                style: style_S20200010035Charging_Points_33,
                interactive: true,
                title: 'S20200010035 — Charging_Points'
            });
var format_Shortestlines_34 = new ol.format.GeoJSON();
var features_Shortestlines_34 = format_Shortestlines_34.readFeatures(json_Shortestlines_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortestlines_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortestlines_34.addFeatures(features_Shortestlines_34);
var lyr_Shortestlines_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shortestlines_34, 
                style: style_Shortestlines_34,
                interactive: true,
                title: '<img src="styles/legend/Shortestlines_34.png" /> Shortest lines'
            });
var format_Shortestlines_35 = new ol.format.GeoJSON();
var features_Shortestlines_35 = format_Shortestlines_35.readFeatures(json_Shortestlines_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortestlines_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortestlines_35.addFeatures(features_Shortestlines_35);
var lyr_Shortestlines_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shortestlines_35, 
                style: style_Shortestlines_35,
                interactive: true,
                title: '<img src="styles/legend/Shortestlines_35.png" /> Shortest lines'
            });
var format_Shortestlines_36 = new ol.format.GeoJSON();
var features_Shortestlines_36 = format_Shortestlines_36.readFeatures(json_Shortestlines_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortestlines_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortestlines_36.addFeatures(features_Shortestlines_36);
var lyr_Shortestlines_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shortestlines_36, 
                style: style_Shortestlines_36,
                interactive: true,
                title: '<img src="styles/legend/Shortestlines_36.png" /> Shortest lines'
            });
var format_S35SHORT_37 = new ol.format.GeoJSON();
var features_S35SHORT_37 = format_S35SHORT_37.readFeatures(json_S35SHORT_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S35SHORT_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S35SHORT_37.addFeatures(features_S35SHORT_37);
var lyr_S35SHORT_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S35SHORT_37, 
                style: style_S35SHORT_37,
                interactive: true,
                title: '<img src="styles/legend/S35SHORT_37.png" /> S35-SHORT'
            });
var format_1464_38 = new ol.format.GeoJSON();
var features_1464_38 = format_1464_38.readFeatures(json_1464_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1464_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1464_38.addFeatures(features_1464_38);
var lyr_1464_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1464_38, 
                style: style_1464_38,
                interactive: true,
                title: '<img src="styles/legend/1464_38.png" /> 146(4)'
            });
var format_1463_39 = new ol.format.GeoJSON();
var features_1463_39 = format_1463_39.readFeatures(json_1463_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1463_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1463_39.addFeatures(features_1463_39);
var lyr_1463_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1463_39, 
                style: style_1463_39,
                interactive: true,
                title: '<img src="styles/legend/1463_39.png" /> 146(3)'
            });
var format_Hubdistance_40 = new ol.format.GeoJSON();
var features_Hubdistance_40 = format_Hubdistance_40.readFeatures(json_Hubdistance_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hubdistance_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hubdistance_40.addFeatures(features_Hubdistance_40);
var lyr_Hubdistance_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hubdistance_40, 
                style: style_Hubdistance_40,
                interactive: true,
                title: '<img src="styles/legend/Hubdistance_40.png" /> Hub distance'
            });
var format_Hubdistance_41 = new ol.format.GeoJSON();
var features_Hubdistance_41 = format_Hubdistance_41.readFeatures(json_Hubdistance_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hubdistance_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hubdistance_41.addFeatures(features_Hubdistance_41);
var lyr_Hubdistance_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hubdistance_41, 
                style: style_Hubdistance_41,
                interactive: true,
                title: '<img src="styles/legend/Hubdistance_41.png" /> Hub distance'
            });
var format_Hubdistance_42 = new ol.format.GeoJSON();
var features_Hubdistance_42 = format_Hubdistance_42.readFeatures(json_Hubdistance_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hubdistance_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hubdistance_42.addFeatures(features_Hubdistance_42);
var lyr_Hubdistance_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hubdistance_42, 
                style: style_Hubdistance_42,
                interactive: true,
                title: '<img src="styles/legend/Hubdistance_42.png" /> Hub distance'
            });
var format_Hubdistance_43 = new ol.format.GeoJSON();
var features_Hubdistance_43 = format_Hubdistance_43.readFeatures(json_Hubdistance_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hubdistance_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hubdistance_43.addFeatures(features_Hubdistance_43);
var lyr_Hubdistance_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hubdistance_43, 
                style: style_Hubdistance_43,
                interactive: true,
                title: '<img src="styles/legend/Hubdistance_43.png" /> Hub distance'
            });
var format_1462_44 = new ol.format.GeoJSON();
var features_1462_44 = format_1462_44.readFeatures(json_1462_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1462_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1462_44.addFeatures(features_1462_44);
var lyr_1462_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1462_44, 
                style: style_1462_44,
                interactive: true,
                title: '<img src="styles/legend/1462_44.png" /> 146(2)'
            });
var format_1461_45 = new ol.format.GeoJSON();
var features_1461_45 = format_1461_45.readFeatures(json_1461_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1461_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1461_45.addFeatures(features_1461_45);
var lyr_1461_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1461_45, 
                style: style_1461_45,
                interactive: true,
                title: '<img src="styles/legend/1461_45.png" /> 146(1)'
            });
var format_Shortestlines_46 = new ol.format.GeoJSON();
var features_Shortestlines_46 = format_Shortestlines_46.readFeatures(json_Shortestlines_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortestlines_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortestlines_46.addFeatures(features_Shortestlines_46);
var lyr_Shortestlines_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shortestlines_46, 
                style: style_Shortestlines_46,
                interactive: true,
                title: '<img src="styles/legend/Shortestlines_46.png" /> Shortest lines'
            });
var format_Hub35RC_47 = new ol.format.GeoJSON();
var features_Hub35RC_47 = format_Hub35RC_47.readFeatures(json_Hub35RC_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hub35RC_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hub35RC_47.addFeatures(features_Hub35RC_47);
var lyr_Hub35RC_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hub35RC_47, 
                style: style_Hub35RC_47,
                interactive: true,
                title: '<img src="styles/legend/Hub35RC_47.png" /> Hub-35(R-C)'
            });
var format_Hub35RH_48 = new ol.format.GeoJSON();
var features_Hub35RH_48 = format_Hub35RH_48.readFeatures(json_Hub35RH_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hub35RH_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hub35RH_48.addFeatures(features_Hub35RH_48);
var lyr_Hub35RH_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hub35RH_48, 
                style: style_Hub35RH_48,
                interactive: true,
                title: '<img src="styles/legend/Hub35RH_48.png" /> Hub-35(R-H)'
            });
var format_estimatedpoint2_49 = new ol.format.GeoJSON();
var features_estimatedpoint2_49 = format_estimatedpoint2_49.readFeatures(json_estimatedpoint2_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedpoint2_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedpoint2_49.addFeatures(features_estimatedpoint2_49);
var lyr_estimatedpoint2_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedpoint2_49, 
                style: style_estimatedpoint2_49,
                interactive: true,
                title: '<img src="styles/legend/estimatedpoint2_49.png" /> estimated point2'
            });
var format_estimatedpoint3_50 = new ol.format.GeoJSON();
var features_estimatedpoint3_50 = format_estimatedpoint3_50.readFeatures(json_estimatedpoint3_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedpoint3_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedpoint3_50.addFeatures(features_estimatedpoint3_50);
var lyr_estimatedpoint3_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedpoint3_50, 
                style: style_estimatedpoint3_50,
                interactive: true,
                title: '<img src="styles/legend/estimatedpoint3_50.png" /> estimated point3'
            });
var format_estimatedpoint4_51 = new ol.format.GeoJSON();
var features_estimatedpoint4_51 = format_estimatedpoint4_51.readFeatures(json_estimatedpoint4_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedpoint4_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedpoint4_51.addFeatures(features_estimatedpoint4_51);
var lyr_estimatedpoint4_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedpoint4_51, 
                style: style_estimatedpoint4_51,
                interactive: true,
                title: '<img src="styles/legend/estimatedpoint4_51.png" /> estimated point4'
            });
var format_estimatedpoint1_52 = new ol.format.GeoJSON();
var features_estimatedpoint1_52 = format_estimatedpoint1_52.readFeatures(json_estimatedpoint1_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedpoint1_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedpoint1_52.addFeatures(features_estimatedpoint1_52);
var lyr_estimatedpoint1_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedpoint1_52, 
                style: style_estimatedpoint1_52,
                interactive: true,
                title: '<img src="styles/legend/estimatedpoint1_52.png" /> estimated point1'
            });
var format_estimatedev4_53 = new ol.format.GeoJSON();
var features_estimatedev4_53 = format_estimatedev4_53.readFeatures(json_estimatedev4_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedev4_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedev4_53.addFeatures(features_estimatedev4_53);
var lyr_estimatedev4_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedev4_53, 
                style: style_estimatedev4_53,
                interactive: true,
                title: '<img src="styles/legend/estimatedev4_53.png" /> estimated ev4'
            });
var format_estimatedev3_54 = new ol.format.GeoJSON();
var features_estimatedev3_54 = format_estimatedev3_54.readFeatures(json_estimatedev3_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedev3_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedev3_54.addFeatures(features_estimatedev3_54);
var lyr_estimatedev3_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedev3_54, 
                style: style_estimatedev3_54,
                interactive: true,
                title: '<img src="styles/legend/estimatedev3_54.png" /> estimated ev3'
            });
var format_estimatedev2_55 = new ol.format.GeoJSON();
var features_estimatedev2_55 = format_estimatedev2_55.readFeatures(json_estimatedev2_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedev2_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedev2_55.addFeatures(features_estimatedev2_55);
var lyr_estimatedev2_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedev2_55, 
                style: style_estimatedev2_55,
                interactive: true,
                title: '<img src="styles/legend/estimatedev2_55.png" /> estimated ev2'
            });
var format_estimatedev1_56 = new ol.format.GeoJSON();
var features_estimatedev1_56 = format_estimatedev1_56.readFeatures(json_estimatedev1_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estimatedev1_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estimatedev1_56.addFeatures(features_estimatedev1_56);
var lyr_estimatedev1_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estimatedev1_56, 
                style: style_estimatedev1_56,
                interactive: true,
                title: '<img src="styles/legend/estimatedev1_56.png" /> estimated ev1'
            });

        var lyr_OpenStreetMap_57 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.509000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var group_estimatedpointsbasedonhotels = new ol.layer.Group({
                                layers: [lyr_estimatedev4_53,lyr_estimatedev3_54,lyr_estimatedev2_55,lyr_estimatedev1_56,],
                                title: "estimated points based on hotels"});
var group_Estimatedpoints = new ol.layer.Group({
                                layers: [lyr_estimatedpoint2_49,lyr_estimatedpoint3_50,lyr_estimatedpoint4_51,lyr_estimatedpoint1_52,],
                                title: "Estimated points"});
var group_Shortestlines = new ol.layer.Group({
                                layers: [lyr_Shortestlines_34,lyr_Shortestlines_35,lyr_Shortestlines_36,lyr_S35SHORT_37,lyr_1464_38,lyr_1463_39,lyr_Hubdistance_40,lyr_Hubdistance_41,lyr_Hubdistance_42,lyr_Hubdistance_43,lyr_1462_44,lyr_1461_45,lyr_Shortestlines_46,lyr_Hub35RC_47,lyr_Hub35RH_48,],
                                title: "Shortest-lines"});
var group_EVSTATIONS = new ol.layer.Group({
                                layers: [lyr_91_26,lyr_92_27,lyr_93_28,lyr_94_29,lyr_S20200010199EVstations_30,lyr_S20200010233EVChargingPoints_31,lyr_S20200010146Charge_32,lyr_S20200010035Charging_Points_33,],
                                title: "EV-STATIONS"});
var group_bufferev = new ol.layer.Group({
                                layers: [lyr_91_26,lyr_92_27,lyr_93_28,lyr_94_29,],
                                title: "buffer-ev"});
var group_HOTELS = new ol.layer.Group({
                                layers: [lyr_Buffered_14,lyr_S35_15,lyr_Buffered_16,lyr_Buffered_17,lyr_S20200010035Hotels_18,lyr_S20200010146Hotels_19,lyr_S20200010199Hotels_20,lyr_S20200010233Hotels_21,],
                                title: "HOTELS"});
var group_buffershotels = new ol.layer.Group({
                                layers: [lyr_Buffered_14,lyr_S35_15,lyr_Buffered_16,lyr_Buffered_17,],
                                title: "buffers-hotels"});
var group_ROADS = new ol.layer.Group({
                                layers: [lyr_S20200010035Roads_0,lyr_S20200010146Roads_1,lyr_S20200010199ExternalRoads_2,lyr_S20200010146InnerRoad_3,lyr_S20200010199InternalRoads_4,lyr_S20200010233Road_5,lyr_Buffered_6,lyr_Buffered_7,lyr_Buffered_8,lyr_Buffered_9,],
                                title: "ROADS"});

lyr_S20200010035Roads_0.setVisible(true);lyr_S20200010146Roads_1.setVisible(true);lyr_S20200010199ExternalRoads_2.setVisible(true);lyr_S20200010146InnerRoad_3.setVisible(true);lyr_S20200010199InternalRoads_4.setVisible(true);lyr_S20200010233Road_5.setVisible(true);lyr_Buffered_6.setVisible(true);lyr_Buffered_7.setVisible(true);lyr_Buffered_8.setVisible(true);lyr_Buffered_9.setVisible(true);lyr_Buffered_10.setVisible(true);lyr_S35_11.setVisible(true);lyr_Buffered_12.setVisible(true);lyr_Buffered_13.setVisible(true);lyr_Buffered_14.setVisible(true);lyr_S35_15.setVisible(true);lyr_Buffered_16.setVisible(true);lyr_Buffered_17.setVisible(true);lyr_S20200010035Hotels_18.setVisible(true);lyr_S20200010146Hotels_19.setVisible(true);lyr_S20200010199Hotels_20.setVisible(true);lyr_S20200010233Hotels_21.setVisible(true);lyr_91_22.setVisible(true);lyr_92_23.setVisible(true);lyr_93_24.setVisible(true);lyr_94_25.setVisible(true);lyr_91_26.setVisible(true);lyr_92_27.setVisible(true);lyr_93_28.setVisible(true);lyr_94_29.setVisible(true);lyr_S20200010199EVstations_30.setVisible(true);lyr_S20200010233EVChargingPoints_31.setVisible(true);lyr_S20200010146Charge_32.setVisible(true);lyr_S20200010035Charging_Points_33.setVisible(true);lyr_Shortestlines_34.setVisible(true);lyr_Shortestlines_35.setVisible(true);lyr_Shortestlines_36.setVisible(true);lyr_S35SHORT_37.setVisible(true);lyr_1464_38.setVisible(true);lyr_1463_39.setVisible(true);lyr_Hubdistance_40.setVisible(true);lyr_Hubdistance_41.setVisible(true);lyr_Hubdistance_42.setVisible(true);lyr_Hubdistance_43.setVisible(true);lyr_1462_44.setVisible(true);lyr_1461_45.setVisible(true);lyr_Shortestlines_46.setVisible(true);lyr_Hub35RC_47.setVisible(true);lyr_Hub35RH_48.setVisible(true);lyr_estimatedpoint2_49.setVisible(true);lyr_estimatedpoint3_50.setVisible(true);lyr_estimatedpoint4_51.setVisible(true);lyr_estimatedpoint1_52.setVisible(true);lyr_estimatedev4_53.setVisible(true);lyr_estimatedev3_54.setVisible(true);lyr_estimatedev2_55.setVisible(true);lyr_estimatedev1_56.setVisible(true);lyr_OpenStreetMap_57.setVisible(true);
var layersList = [group_ROADS,group_buffershotels,group_HOTELS,group_bufferev,group_EVSTATIONS,group_Shortestlines,group_Estimatedpoints,group_estimatedpointsbasedonhotels,lyr_OpenStreetMap_57];
lyr_S20200010035Roads_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010146Roads_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010199ExternalRoads_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010146InnerRoad_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010199InternalRoads_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010233Road_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S35_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S35_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010035Hotels_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010146Hotels_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010199Hotels_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010233Hotels_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_91_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_92_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_93_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_94_25.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_91_26.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_92_27.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_93_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_94_29.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010199EVstations_30.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010233EVChargingPoints_31.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010146Charge_32.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S20200010035Charging_Points_33.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Shortestlines_34.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', 'distance': 'distance', });
lyr_Shortestlines_35.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', 'distance': 'distance', });
lyr_Shortestlines_36.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', 'distance': 'distance', });
lyr_S35SHORT_37.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', 'distance': 'distance', });
lyr_1464_38.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_1463_39.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Hubdistance_40.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Hubdistance_41.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Hubdistance_42.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Hubdistance_43.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_1462_44.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_1461_45.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Shortestlines_46.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', 'distance': 'distance', });
lyr_Hub35RC_47.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Hub35RH_48.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_estimatedpoint2_49.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'Estimated point': 'Estimated point', });
lyr_estimatedpoint3_50.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estimated points': 'estimated points', });
lyr_estimatedpoint4_51.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estimated points': 'estimated points', });
lyr_estimatedpoint1_52.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'Estimated point': 'Estimated point', });
lyr_estimatedev4_53.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estimated point': 'estimated point', });
lyr_estimatedev3_54.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estimated point': 'estimated point', });
lyr_estimatedev2_55.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estimated point': 'estimated point', });
lyr_estimatedev1_56.set('fieldAliases', {'fid': 'fid', 'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estimated point': 'estimated point', });
lyr_S20200010035Roads_0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_S20200010146Roads_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010199ExternalRoads_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010146InnerRoad_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010199InternalRoads_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010233Road_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_6.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_7.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_8.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_9.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_10.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S35_11.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_12.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_13.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_14.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S35_15.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_16.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_17.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010035Hotels_18.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010146Hotels_19.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010199Hotels_20.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010233Hotels_21.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_91_22.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_92_23.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_93_24.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_94_25.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_91_26.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_92_27.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_93_28.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_94_29.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010199EVstations_30.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010233EVChargingPoints_31.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010146Charge_32.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_S20200010035Charging_Points_33.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Shortestlines_34.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'DateTime', 'begin_2': 'DateTime', 'end_2': 'DateTime', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', 'distance': 'TextEdit', });
lyr_Shortestlines_35.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'DateTime', 'begin_2': 'DateTime', 'end_2': 'DateTime', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', 'distance': 'TextEdit', });
lyr_Shortestlines_36.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'DateTime', 'begin_2': 'DateTime', 'end_2': 'DateTime', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', 'distance': 'TextEdit', });
lyr_S35SHORT_37.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'DateTime', 'begin_2': 'DateTime', 'end_2': 'DateTime', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', 'distance': 'TextEdit', });
lyr_1464_38.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_1463_39.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Hubdistance_40.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Hubdistance_41.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Hubdistance_42.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Hubdistance_43.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_1462_44.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_1461_45.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Shortestlines_46.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'DateTime', 'begin_2': 'DateTime', 'end_2': 'DateTime', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', 'distance': 'TextEdit', });
lyr_Hub35RC_47.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Hub35RH_48.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_estimatedpoint2_49.set('fieldImages', {'fid': '', 'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'Estimated point': '', });
lyr_estimatedpoint3_50.set('fieldImages', {'fid': '', 'MEAN_X': '', 'MEAN_Y': '', 'estimated points': '', });
lyr_estimatedpoint4_51.set('fieldImages', {'fid': '', 'MEAN_X': '', 'MEAN_Y': '', 'estimated points': '', });
lyr_estimatedpoint1_52.set('fieldImages', {'fid': '', 'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'Estimated point': '', });
lyr_estimatedev4_53.set('fieldImages', {'fid': '', 'MEAN_X': '', 'MEAN_Y': '', 'estimated point': '', });
lyr_estimatedev3_54.set('fieldImages', {'fid': '', 'MEAN_X': '', 'MEAN_Y': '', 'estimated point': '', });
lyr_estimatedev2_55.set('fieldImages', {'fid': '', 'MEAN_X': '', 'MEAN_Y': '', 'estimated point': '', });
lyr_estimatedev1_56.set('fieldImages', {'fid': '', 'MEAN_X': '', 'MEAN_Y': '', 'estimated point': '', });
lyr_S20200010035Roads_0.set('fieldLabels', {});
lyr_S20200010146Roads_1.set('fieldLabels', {});
lyr_S20200010199ExternalRoads_2.set('fieldLabels', {});
lyr_S20200010146InnerRoad_3.set('fieldLabels', {});
lyr_S20200010199InternalRoads_4.set('fieldLabels', {});
lyr_S20200010233Road_5.set('fieldLabels', {});
lyr_Buffered_6.set('fieldLabels', {});
lyr_Buffered_7.set('fieldLabels', {});
lyr_Buffered_8.set('fieldLabels', {});
lyr_Buffered_9.set('fieldLabels', {});
lyr_Buffered_10.set('fieldLabels', {});
lyr_S35_11.set('fieldLabels', {});
lyr_Buffered_12.set('fieldLabels', {});
lyr_Buffered_13.set('fieldLabels', {});
lyr_Buffered_14.set('fieldLabels', {});
lyr_S35_15.set('fieldLabels', {});
lyr_Buffered_16.set('fieldLabels', {});
lyr_Buffered_17.set('fieldLabels', {});
lyr_S20200010035Hotels_18.set('fieldLabels', {});
lyr_S20200010146Hotels_19.set('fieldLabels', {});
lyr_S20200010199Hotels_20.set('fieldLabels', {});
lyr_S20200010233Hotels_21.set('fieldLabels', {});
lyr_91_22.set('fieldLabels', {});
lyr_92_23.set('fieldLabels', {});
lyr_93_24.set('fieldLabels', {});
lyr_94_25.set('fieldLabels', {});
lyr_91_26.set('fieldLabels', {});
lyr_92_27.set('fieldLabels', {});
lyr_93_28.set('fieldLabels', {});
lyr_94_29.set('fieldLabels', {});
lyr_S20200010199EVstations_30.set('fieldLabels', {});
lyr_S20200010233EVChargingPoints_31.set('fieldLabels', {});
lyr_S20200010146Charge_32.set('fieldLabels', {});
lyr_S20200010035Charging_Points_33.set('fieldLabels', {});
lyr_Shortestlines_34.set('fieldLabels', {});
lyr_Shortestlines_35.set('fieldLabels', {});
lyr_Shortestlines_36.set('fieldLabels', {});
lyr_S35SHORT_37.set('fieldLabels', {});
lyr_1464_38.set('fieldLabels', {});
lyr_1463_39.set('fieldLabels', {});
lyr_Hubdistance_40.set('fieldLabels', {});
lyr_Hubdistance_41.set('fieldLabels', {});
lyr_Hubdistance_42.set('fieldLabels', {});
lyr_Hubdistance_43.set('fieldLabels', {});
lyr_1462_44.set('fieldLabels', {});
lyr_1461_45.set('fieldLabels', {});
lyr_Shortestlines_46.set('fieldLabels', {});
lyr_Hub35RC_47.set('fieldLabels', {});
lyr_Hub35RH_48.set('fieldLabels', {});
lyr_estimatedpoint2_49.set('fieldLabels', {});
lyr_estimatedpoint3_50.set('fieldLabels', {});
lyr_estimatedpoint4_51.set('fieldLabels', {});
lyr_estimatedpoint1_52.set('fieldLabels', {});
lyr_estimatedev4_53.set('fieldLabels', {});
lyr_estimatedev3_54.set('fieldLabels', {});
lyr_estimatedev2_55.set('fieldLabels', {});
lyr_estimatedev1_56.set('fieldLabels', {});
lyr_estimatedev1_56.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});