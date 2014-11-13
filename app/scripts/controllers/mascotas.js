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
  		$scope.miPlataforma = [];

  		pwPage.getChildren('1011', 'template=mascota', '')		//mascotas
  		.then(function(response){
  			$scope.myData = [];

	  			for(var i = 0; i<response.length; i=i+1){

	  				pwPage.getPage(response[i].id)
			  		.then(function(response){
			  			console.debug("Mis datos", response);
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

	  $scope.today = function() {
	  $scope.dt = new Date();
	  };
	  $scope.today();

	  $scope.clear = function () {
	    $scope.dt = null;
	  };

	  // Disable weekend selection
	  $scope.disabled = function(date, mode) {
	    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	  };

	  $scope.toggleMin = function() {
	    $scope.minDate = $scope.minDate ? null : new Date();
	  };
	  $scope.toggleMin();

	  $scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
	  };

	  $scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
	  };

	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];



    $scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];




  });
