'use strict';

/**
 * @ngdoc function
 * @name testingAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testingAngularApp
 */
angular.module('testingAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
