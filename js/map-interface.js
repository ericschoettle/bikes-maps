var apiKey = require('./../.env').apiKey;
    // function OnceLoaded() {
    //     // Once loaded.. load other JS or CSS or call objects of version.js
    // }

$(function(){
  var apiLink = "https://maps.googleapis.com/maps/api/js?key=" + apiKey
  var apiScript = document.createElement('script');
  apiScript.src = apiLink;
  apiScript.onload = onceLoaded;
  document.getElementsByTagName('head')[0].appendChild(apiScript);

  function onceLoaded() {
    var map, infoWindow;
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(2.8,-187.3),
      mapTypeId: 'terrain'
    });
    infoWindow = new google.maps.InfoWindow();

    $.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson')
    .then(function(response) {
      debugger
      var heatmapData = [];
      for (var i = 0; i < response.features.length; i++) {
        var coords = response.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        heatmapData.push(latLng);
      }
      debugger
      // var heatmap = new google.maps.visualization.HeatmapLayer({
      //   data: heatmapData,
      //   dissipating: false,
      //   map: map
      // });

      // for (var i = 0; i < response.features.length; i++) {
      //   var coords = response.features[i].geometry.coordinates;
      //   var latLng = new google.maps.LatLng(coords[1],coords[0]);
      //   var marker = new google.maps.Marker({
      //     position: latLng,
      //     map: map
      //   });
      // }
    })
    .fail(function(error) {
      alert(error)
    })
  }
});





// exports.apiKey = "AlzaSyBATBk5_Bpd_AooF_IU37MqKUqwkZDrD5k"
// exports.apiKey = "AlzaSyBjr7CuPxVxUabAX4-NgzQneG4ze5x9uOg"
