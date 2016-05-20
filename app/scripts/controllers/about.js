'use strict';

/**
 * @ngdoc function
 * @name shortenerLinkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shortenerLinkApp
 */
angular.module('shortenerLinkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
