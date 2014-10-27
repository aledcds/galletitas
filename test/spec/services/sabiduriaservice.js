'use strict';

describe('Service: SabiduriaService', function () {

  var RESPUESTA_666='Highway to hell'.toUpperCase();
	
  // load the service's module
  beforeEach(module('testingAngularApp'));

  // instantiate service
  var SabiduriaService, httpBackend;
  
	
  beforeEach(inject(function (_SabiduriaService_,$httpBackend) {
    SabiduriaService = _SabiduriaService_;
	 httpBackend = $httpBackend;
  }));

  it('Recupera la galleta numérica', function () {
	  
	  var URL = /numbersapi\.com\/\d+/;
    
	  httpBackend.whenGET(URL).respond(RESPUESTA_666);
	  //debugger;
	  var promesa = SabiduriaService.getGalleTaNumerica(666);
	  promesa.then(function(respuesta){
		
		  expect(respuesta.data).toEqual(RESPUESTA_666);
	  });
	  
	  //limipia memori imprescindible
	  httpBackend.flush();
	  
  });
	
 
	 it('Recupera la galleta numérica EN MAYÜSCULAS', function () {
	  
	  var URL = /numbersapi\.com\/666/;
    
	  httpBackend.whenGET(URL).respond(RESPUESTA_666);
	  //debugger;
	  var promesa = SabiduriaService.getGalleTaNumerica(666);
	  promesa.then(function(respuesta){
		
		  expect(respuesta.data).toEqual(respuesta.data.toUpperCase());
	  });
	  
	  //limipia memori imprescindible
	  httpBackend.flush();
	  
  });
	
	
	
	

});
