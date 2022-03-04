
// Description of national reference system EPSG:3346
var crs_3346 = new L.Proj.CRS('EPSG:3346', '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
    origin: [-5122000, 10000100],
    resolutions: [
        1322.9193125052918,
        793.7515875031751,
        529.1677250021168,
        264.5838625010584,
        132.2919312505292,
        66.1459656252646,
        26.458386250105836,
        13.229193125052918,
        6.614596562526459,
        2.6458386250105836,
        1.3229193125052918,
        0.5291677250021167,
        0.26458386250105836,
        0.13229193125052918
    ]
});

// Initiate leaflet map with custom, not web mercator, reference system
var map = L.map('map', {
    center: [54.6943, 25.2641],
    zoom: 8,
    crs: crs_3346
});

// Service of ortophotographic imagery data
var geoportal_orto = L.tileLayer('https://www.geoportal.lt/mapproxy/nzt_ort10lt_recent/MapServer' + "/tile/{z}/{y}/{x}", {
	tileSize: 256,
    minZoom: 0,
    maxZoom: 12,
	zoomOffset: -1,
    attribution: '<a href="geoportal.lt">geoportal.lt, VĮ GIS-Centras</a>'
}).addTo(map);

// Service of national basemap
var geoportal_topo = L.tileLayer('https://www.geoportal.lt/mapproxy/gisc_pagrindinis/MapServer' + "/tile/{z}/{y}/{x}", {
	tileSize: 512,
    minZoom: 0,
    maxZoom: 12,
    attribution: '<a href="geoportal.lt">geoportal.lt, VĮ GIS-Centras</a>'
});

// Service of national georeference data cadastre
var geoportal_grpk = L.tileLayer('https://www.geoportal.lt/mapproxy/gisc_grpk/MapServer' + "/tile/{z}/{y}/{x}", {
	tileSize: 512,
    minZoom: 0,
    maxZoom: 12,
    attribution: '<a href="geoportal.lt">geoportal.lt, VĮ GIS-Centras</a>'
});

// Service of hybrid (orto + label) basemap
var geoportal_hypbrid = L.tileLayer('https://www.geoportal.lt/mapproxy/gisc_misrus/MapServer' + "/tile/{z}/{y}/{x}", {
	tileSize: 512,
    minZoom: 0,
    maxZoom: 12,
    attribution: '<a href="geoportal.lt">geoportal.lt, VĮ GIS-Centras</a>'
});

var baseLayers = {
    "Geoportal.lt orthophoto map": geoportal_orto,
    "Geoportal.lt topo map": geoportal_topo,
    "GRPK map": geoportal_grpk,
    "Hybrid map": geoportal_hypbrid
};

L.control.layers(baseLayers).addTo(map);