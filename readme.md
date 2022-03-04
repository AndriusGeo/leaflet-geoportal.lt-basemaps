# Leaflet map with geoportal.lt non-mercator services

## About

This is the demo for showing how to use non-mercator basemap services from Lithuanian Spatial Information portal [geoportal.lt](https://www.geoportal.lt) with Leaflet.

Rigth now 4 types of different basemaps are added:
* Orthophoto imagery
* National base map
* Georeference cadastre (GRPK) map
* Hybrid map: orthophoto + labels 

## Additional libraries

In order to transform mercator based CRS of leaflet proj4js library is used. More information:
* For coordinate transformation - [Proj4Js](https://github.com/proj4js/proj4js)
* For custom CRS creation in Leaflet - [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet)

## How to use the demo

Just simple clone or download this repository and open index.html file. 

## Acknowledgment

This example is created using:
* PatrickMcKinney1 blog post [Adding Map Services with Custom Tiling Schemes to Leaflet](https://community.esri.com/t5/esri-leaflet-questions/adding-map-services-with-custom-tiling-schemes-to/td-p/799655)
* ESRI-Leaflet example - [Non-mercator projection](http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html)