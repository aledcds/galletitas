'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testingAngularApp'));

  var MainCtrl,
    scope,q;

  var sabiduriaServiceMock = {
	  
	  getGalleTaNumerica : function(numero){
  
  			var d  = q.defer();	
  			d.resolve( {data :'HIGWAY TO HELL'} );
	  		var promesa = d.promise;
	  		
	  		return promesa
  		}
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
	q = $q;
	MainCtrl = $controller('MainCtrl', {
      $scope: scope,
	  SabiduriaService: sabiduriaServiceMock
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

 it('Deberiamos recuperar una galleta para el número', function () {
    	scope.numero = 666;
	 
	 scope.actualizarPantalla();	
	 scope.$root.$digest();
	 expect(scope.respuesta).toBe('HIGWAY TO HELL');
  
 });




});
