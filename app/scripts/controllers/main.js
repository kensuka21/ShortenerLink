'use strict';

/**
 * @ngdoc function
 * @name shortenerLinkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shortenerLinkApp
 */
angular.module('shortenerLinkApp')
  .controller('MainCtrl', function ($scope, shortenUrlService) {
    $scope.shortenUrl = function(){
      shortenUrlService.shortenUrl($scope.longUrl, function(shortUrl){
        $scope.shortUrl = shortUrl;
      });
    }

    $scope.copyText = function(){
      clipboard.copy($scope.shortUrl).then(function(){
        Materialize.toast('Copied !', 4000)

      });
    }
  });
