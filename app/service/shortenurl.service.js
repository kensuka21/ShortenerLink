/**
 * Created by kesalcedo on 5/18/2016.
 */
angular.module('shortenerLinkApp')
  .service('shortenUrlService', function ($http) {
    this.shortenUrl = shortenUrl;

    function shortenUrl(longUrl, callback) {
      var data = {
        longUrl: longUrl
      }
      $http.post('https://shortenerlinkapi.herokuapp.com/api/shortenerlink', JSON.stringify(data))
        .then(function (response) {
          callback(response.data.shortUrl);
        }, function (response) {
          Materialize.toast('Insert the URL', 4000)
        });
    };
  });
