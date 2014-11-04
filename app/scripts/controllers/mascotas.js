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



  		pwPage.getChildren('1011', 'template=mascota', '')		//mascotas
  		.then(function(response){
  			$scope.myData = [];
  			for(var i = 0; i<response.length; i=i+1){
  				pwPage.getPage(response[i].id)
		  		.then(function(response){
		  			console.debug("Mis datosa", response);
		  			$scope.myData.push(response)
  		})
  			}

  			// $scope.myData = [];
  			// $scope.myData.push(response)
  		})


		//   $scope.myData = [
		//     {
		//         "firstName": "Cox",
		//         "lastName": "Carney",
		//         "company": "Enormo",
		//         "employed": true
		//     },
		//     {
		//         "firstName": "Lorraine",
		//         "lastName": "Wise",
		//         "company": "Comveyer",
		//         "employed": false
		//     },
		//     {
		//         "firstName": "Nancy",
		//         "lastName": "Waters",
		//         "company": "Fuelton",
		//         "employed": false
		//     }
		// ];


    $scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];


  });
