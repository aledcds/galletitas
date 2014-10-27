'use strict';

/**
 * @ngdoc service
 * @name testingAngularApp.SabiduriaService
 * @description
 * # SabiduriaService
 * Service in the testingAngularApp.
 */
angular.module('testingAngularApp')
  .factory('SabiduriaService',['$http', function SabiduriaService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var URL_NUMEROS = 'http://numbersapi.com/{numero}';
	
	var getGalleTaNumericaImpl = function(numero){
			var url = URL_NUMEROS.replace('{numero}',numero);
			var promesa = $http.get(url);
	  		return promesa;
										   
		};
	return {
	
		getGalleTaNumerica : getGalleTaNumericaImpl
	};
	
  }]);
