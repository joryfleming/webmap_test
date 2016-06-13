<!-- Add ESRI basemap, SLR Vector data from OCM ArcGIS Server, Woods Hole Biomass Dataset -->
<!-- http://www.arcgis.com/home/item.html?id=788d82b22856444cb0ae04050f83e64f -->
<script>
  var osm = Tangram.leafletLayer({
    scene: 'scene.yaml',
    attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
  });

  var slr = L.esri.dynamicMapLayer({ 
    url: 'http://csc-s-gis1-d:6080/arcgis/rest/services/Test/MA/MapServer',
    opacity: 0.7
  });

  var map = L.map('map',{
    center: [42.364423, -71.055261], 
    zoom: 16,
    layers: [osm, slr]
  });

  var baseMaps = {
    "Open Street Map": osm
  };

  var overlayMaps = {
    "Sea Level Rise 6ft": slr
  };

  L.control.layers(baseMaps, overlayMaps).addTo(map);
  
</script>
