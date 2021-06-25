var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 1.300 - 5.425<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 5.426 - 10.250<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 10.251 - 24.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 24.001 o más<br />'
        });
var format_ViviendasenreasruralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_4 = format_ViviendasenreasruralesINDEC_4.readFeatures(json_ViviendasenreasruralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_4.addFeatures(features_ViviendasenreasruralesINDEC_4);
var lyr_ViviendasenreasruralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_4, 
                style: style_ViviendasenreasruralesINDEC_4,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_0.png" /> 375 - 400<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_1.png" /> 401 - 775<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_2.png" /> 776 - 1.075<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_3.png" /> 1.076 - 2.075<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_4.png" /> 2.076 - 4.610<br />'
        });
var format_PoblacinpordepartamentoINDEC_5 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_5 = format_PoblacinpordepartamentoINDEC_5.readFeatures(json_PoblacinpordepartamentoINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_5.addFeatures(features_PoblacinpordepartamentoINDEC_5);
var lyr_PoblacinpordepartamentoINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_5, 
                style: style_PoblacinpordepartamentoINDEC_5,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_0.png" /> 2.150 - 8.300<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_1.png" /> 8.301 - 15.250<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_2.png" /> 15.251 - 36.550<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_3.png" /> 36.551 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 10 - 270<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 271 - 1.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 1.001 o más<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 2.170 - 3.780<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 3.781 - 9.075<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 9.076 - 15.415<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 15.416 - 35.210<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 500 - 5.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 5.001 - 30.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 30.001 - 55.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 55.001 - 90.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_4.png" /> 90.001 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 1.500 - 4.250<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 4.251 - 10.600<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 10.601 - 17.450<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 17.451 - 23.080<br />'
        });
var format_HectreasdevidINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdevidINDEC_10 = format_HectreasdevidINDEC_10.readFeatures(json_HectreasdevidINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdevidINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdevidINDEC_10.addFeatures(features_HectreasdevidINDEC_10);
var lyr_HectreasdevidINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdevidINDEC_10, 
                style: style_HectreasdevidINDEC_10,
                interactive: true,
    title: 'Hectáreas de vid (INDEC)<br />\
    <img src="styles/legend/HectreasdevidINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdevidINDEC_10_1.png" /> 1 - 7<br />\
    <img src="styles/legend/HectreasdevidINDEC_10_2.png" /> 8 - 75<br />\
    <img src="styles/legend/HectreasdevidINDEC_10_3.png" /> más de 76<br />'
        });
var format_HectreasdeperalesINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdeperalesINDEC_11 = format_HectreasdeperalesINDEC_11.readFeatures(json_HectreasdeperalesINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeperalesINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeperalesINDEC_11.addFeatures(features_HectreasdeperalesINDEC_11);
var lyr_HectreasdeperalesINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeperalesINDEC_11, 
                style: style_HectreasdeperalesINDEC_11,
                interactive: true,
    title: 'Hectáreas de perales (INDEC)<br />\
    <img src="styles/legend/HectreasdeperalesINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeperalesINDEC_11_1.png" /> 1 - 4<br />\
    <img src="styles/legend/HectreasdeperalesINDEC_11_2.png" /> 800 - 1.400<br />'
        });
var format_HectreasdemanzanalesINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdemanzanalesINDEC_12 = format_HectreasdemanzanalesINDEC_12.readFeatures(json_HectreasdemanzanalesINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemanzanalesINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemanzanalesINDEC_12.addFeatures(features_HectreasdemanzanalesINDEC_12);
var lyr_HectreasdemanzanalesINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemanzanalesINDEC_12, 
                style: style_HectreasdemanzanalesINDEC_12,
                interactive: true,
    title: 'Hectáreas de manzanales (INDEC)<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_12_1.png" /> 1 - 5<br />\
    <img src="styles/legend/HectreasdemanzanalesINDEC_12_2.png" /> 1.300 - 2.000<br />'
        });
var format_LocalidadesNeuqun_13 = new ol.format.GeoJSON();
var features_LocalidadesNeuqun_13 = format_LocalidadesNeuqun_13.readFeatures(json_LocalidadesNeuqun_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesNeuqun_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesNeuqun_13.addFeatures(features_LocalidadesNeuqun_13);
var lyr_LocalidadesNeuqun_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesNeuqun_13, 
                style: style_LocalidadesNeuqun_13,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesNeuqun_13.png" /> Localidades Neuquén'
            });
var format_Capacitaciones2018difusin_14 = new ol.format.GeoJSON();
var features_Capacitaciones2018difusin_14 = format_Capacitaciones2018difusin_14.readFeatures(json_Capacitaciones2018difusin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018difusin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018difusin_14.addFeatures(features_Capacitaciones2018difusin_14);
var lyr_Capacitaciones2018difusin_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018difusin_14, 
                style: style_Capacitaciones2018difusin_14,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018difusin_14.png" /> Capacitaciones 2018 (difusión)'
            });
var format_BERNeuqun_15 = new ol.format.GeoJSON();
var features_BERNeuqun_15 = format_BERNeuqun_15.readFeatures(json_BERNeuqun_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERNeuqun_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERNeuqun_15.addFeatures(features_BERNeuqun_15);
var lyr_BERNeuqun_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERNeuqun_15, 
                style: style_BERNeuqun_15,
                interactive: true,
                title: '<img src="styles/legend/BERNeuqun_15.png" /> BER Neuquén'
            });
var format_BERNeuqun_16 = new ol.format.GeoJSON();
var features_BERNeuqun_16 = format_BERNeuqun_16.readFeatures(json_BERNeuqun_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERNeuqun_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERNeuqun_16.addFeatures(features_BERNeuqun_16);
var lyr_BERNeuqun_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERNeuqun_16, 
                style: style_BERNeuqun_16,
                interactive: true,
                title: '<img src="styles/legend/BERNeuqun_16.png" /> BER Neuquén'
            });
var format_Agencia_17 = new ol.format.GeoJSON();
var features_Agencia_17 = format_Agencia_17.readFeatures(json_Agencia_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agencia_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agencia_17.addFeatures(features_Agencia_17);
var lyr_Agencia_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agencia_17, 
                style: style_Agencia_17,
                interactive: true,
                title: '<img src="styles/legend/Agencia_17.png" /> Agencia'
            });
var format_DelegacinNeuqun_18 = new ol.format.GeoJSON();
var features_DelegacinNeuqun_18 = format_DelegacinNeuqun_18.readFeatures(json_DelegacinNeuqun_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinNeuqun_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinNeuqun_18.addFeatures(features_DelegacinNeuqun_18);
var lyr_DelegacinNeuqun_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinNeuqun_18, 
                style: style_DelegacinNeuqun_18,
                interactive: true,
                title: '<img src="styles/legend/DelegacinNeuqun_18.png" /> Delegación Neuquén'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_ViviendasenreasruralesINDEC_4.setVisible(true);lyr_PoblacinpordepartamentoINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdevidINDEC_10.setVisible(true);lyr_HectreasdeperalesINDEC_11.setVisible(true);lyr_HectreasdemanzanalesINDEC_12.setVisible(true);lyr_LocalidadesNeuqun_13.setVisible(true);lyr_Capacitaciones2018difusin_14.setVisible(true);lyr_BERNeuqun_15.setVisible(true);lyr_BERNeuqun_16.setVisible(true);lyr_Agencia_17.setVisible(true);lyr_DelegacinNeuqun_18.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PEAINDEC_3,lyr_ViviendasenreasruralesINDEC_4,lyr_PoblacinpordepartamentoINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdevidINDEC_10,lyr_HectreasdeperalesINDEC_11,lyr_HectreasdemanzanalesINDEC_12,lyr_LocalidadesNeuqun_13,lyr_Capacitaciones2018difusin_14,lyr_BERNeuqun_15,lyr_BERNeuqun_16,lyr_Agencia_17,lyr_DelegacinNeuqun_18];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldAliases', {'Viv Rur': 'Viv Rur', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcino': 'Porcino', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovino': 'Ovino', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprino': 'Caprino', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovino': 'Bovino', });
lyr_HectreasdevidINDEC_10.set('fieldAliases', {'Vid': 'Vid', });
lyr_HectreasdeperalesINDEC_11.set('fieldAliases', {'Peral': 'Peral', });
lyr_HectreasdemanzanalesINDEC_12.set('fieldAliases', {'Manzanal': 'Manzanal', });
lyr_LocalidadesNeuqun_13.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_Capacitaciones2018difusin_14.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa.': 'Tipo Capa.', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_BERNeuqun_15.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BERNeuqun_16.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_Agencia_17.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', });
lyr_DelegacinNeuqun_18.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldImages', {'Viv Rur': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldImages', {'Poblacion': '', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcino': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovino': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprino': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovino': 'TextEdit', });
lyr_HectreasdevidINDEC_10.set('fieldImages', {'Vid': 'TextEdit', });
lyr_HectreasdeperalesINDEC_11.set('fieldImages', {'Peral': 'TextEdit', });
lyr_HectreasdemanzanalesINDEC_12.set('fieldImages', {'Manzanal': 'TextEdit', });
lyr_LocalidadesNeuqun_13.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_Capacitaciones2018difusin_14.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa.': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_BERNeuqun_15.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BERNeuqun_16.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_Agencia_17.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_DelegacinNeuqun_18.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldLabels', {'Viv Rur': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcino': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovino': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprino': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovino': 'inline label', });
lyr_HectreasdevidINDEC_10.set('fieldLabels', {'Vid': 'inline label', });
lyr_HectreasdeperalesINDEC_11.set('fieldLabels', {'Peral': 'inline label', });
lyr_HectreasdemanzanalesINDEC_12.set('fieldLabels', {'Manzanal': 'inline label', });
lyr_LocalidadesNeuqun_13.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_Capacitaciones2018difusin_14.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa.': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_BERNeuqun_15.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BERNeuqun_16.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_Agencia_17.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', });
lyr_DelegacinNeuqun_18.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_DelegacinNeuqun_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});