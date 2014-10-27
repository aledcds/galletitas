'use strict';

/**
 * @ngdoc function
 * @name testingAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testingAngularApp
 */
angular.module('testingAngularApp')
  .controller('MainCtrl', function ($scope,SabiduriaService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
	$scope.actualizarPantalla = function(){
		
		SabiduriaService
		.getGalleTaNumerica($scope.numero)
		.then(function(response){
		
			$scope.respuesta = response.data;
			
		});
		
	}
	
  });
