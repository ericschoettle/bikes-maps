//third
// BikeSearch = function() {
//   this.search = function(searchObject, displaySearchResults) {
//     var url = "https://bikeindex.org:443/api/v3/search?page=1&per_page=25&stolenness=stolen"
//     for (var key in searchObject) {
//       if (searchObject.hasOwnProperty(key)) {
//         if (searchObject[key]) {
//           url = url + "&" + key + "=" + searchObject[key]
//           console.log(url)
//         }
//       }
//     }
//
//     //fourth
//     $.get(url).then(function(response) {
//       displaySearchResults(searchObject, response.bikes)
//     }).fail(function(error) {
//       displaySearchResults(searchObject, [error.statusText]);
//     });
//   };
// };
//
// exports.bikeSearchModule = BikeSearch;
