'use strict';

/**
 * @ngdoc function
 * @name benipeixgularApp.controller:MascotasCtrl
 * @description
 * # MascotasCtrl
 * Controller of the benipeixgularApp
 */
angular.module('benipeixgularApp')
  .controller('MascotasCtrl', function ($scope, pwPage) {
  		pwPage.getPage('1199')
  		.then(function(response){
  			console.debug("Mis datos", response);
  		})
  });
