// var BikeTraits = require('./../js/bike.js').bikeTraitsModule;
//
// var bikeTraits = ["colors"]
//
// var displayTraits = function(trait, traitData) {
//   $('.show')
// }
//
// $(document).ready(function() {
//   bikeTraits.forEach(function(trait) {
//     var bikeTrait = new BikeTraits();
//     bikeTrait.getOptions(trait, displayTraits);
//     console.log(options)
//   });
// });

//first
var BikeSearch = require('./../js/bike-search.js').bikeSearchModule;

//last
var displaySearchResults = function(searchObject, response) {
  for (var i = 0; i < response.length; i++) {
    if (response[i].title) {
      $('#output').append(response[i].title)
    } else {
      $('#output').append(item)
    }
  }
}

//second
$(document).ready(function() {
  $('#search').click(function() {
    var serial = $('#serial').val();
    var manufacturer = $('#manufacturer').val();
    var location = $('#location').val();
    var distance = $('#distance').val();
    // var colors = $('select option:checked').val();
    var searchObject = {
      serial: serial,
      manufacturer: manufacturer,
      location: location,
      distance: distance
    };
    bikeSearch = new BikeSearch();
    var test = bikeSearch.search(searchObject, displaySearchResults);
  });
});
