'use strict';

/**
 * @ngdoc overview
 * @name benipeixgularApp
 * @description
 * # benipeixgularApp
 *
 * Main module of the application.
 */
angular
  .module('benipeixgularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/mascotas', {
        templateUrl: 'views/mascotas.html',
        controller: 'MascotasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .config(function($httpProvider){ 
    // $httpProvider.defaults.withCredentials = true;
    // $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
