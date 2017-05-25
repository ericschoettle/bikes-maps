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

// //first
// var BikeSearch = require('./../js/bike-search.js').bikeSearchModule;
//
// //last
// var displaySearchResults = function(searchObject, response) {
//   for (var i = 0; i < response.length; i++) {
//     if (response[i].title) {
//       $('#output').append(concatBikeData(response[i]))
//     } else {
//       $('#output').append(item)
//     }
//   }
// }
//
//
// var concatBikeData = function(bikeData) {
//   string = '<div class="col-md-3">'
//   if (bikeData.title) {
//     string = string + '<h3>' + bikeData.title + '</h3>'
//   }
//   if (bikeData.thumb) {
//     string = string + '<img src="' + bikeData.thumb + '" alt="bike_img_missing" />'
//   }
//   if (bikeData.frame_colors || bikeData.brand || bikeData.model) {
//     string = string + '<h4>'
//     if (bikeData.frame_colors) {
//       bikeData.frame_colors.forEach(function(color){
//         string = string + color + ", "
//       })
//     }
//     if (bikeData.brand) {
//       string = string + bikeData.brand + ", "
//     }
//     if (bikeData.model) {
//       string = string + bikeData.model + ", "
//     }
//     string = string.slice(0, -2);
//     string = string + '</h4>';
//   }
//   string = string + '</div>';
//   return string;
// }
// //second
// $(document).ready(function() {
//   $('#search').click(function() {
//     var serial = $('#serial').val();
//     var manufacturer = $('#manufacturer').val();
//     var location = $('#location').val();
//     var distance = $('#distance').val();
//     // var colors = $('select option:checked').val();
//     var searchObject = {
//       serial: serial,
//       manufacturer: manufacturer,
//       location: location,
//       distance: distance
//     };
//     bikeSearch = new BikeSearch();
//     var test = bikeSearch.search(searchObject, displaySearchResults);
//   });
// });
