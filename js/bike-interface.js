// var BikeTraits = require('./../js/bike.js').bikeTraitsModule;
//
// var bikeTraits = ["colors"]
// var traits = []
// $(document).ready(function() {
//   bikeTraits.forEach(function(trait) {
//     var bikeTrait = new BikeTraits();
//     var options = bikeTrait.options
//     console.log(options)
//   });
// });

var BikeSearch = require('./../js/bike-search.js').bikeSearchModule;

$(document).ready(function() {
  $('#search').submit(function() {
    var serial = $('#serial').val();
    var manufact = $('#manufact').val();
    var location = $('#location').val();
    var color = $('select option:checked').val();
    var searchObject = {
      serial: serial,
      manufact: manufact,
      location: location,
      color: color
    };
    debugger
    console.log(searchObject);
  });
});
