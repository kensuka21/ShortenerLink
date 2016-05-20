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
      $http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDlh3SIls-oZcqr_RPo3ts-rx4jCFXJE6I', JSON.stringify(data))
        .then(function (response) {
          callback(response.data.id);
        }, function (response) {
          Materialize.toast('Insert the URL', 4000)
        });
    };
  });
