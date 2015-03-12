'use strict';

/**
 * @ngdoc overview
 * @name angularSchemaFormDatepickerApp
 * @description
 * # angularSchemaFormDatepickerApp
 *
 * Main module of the application.
 */
 angular.module('angularSchemaFormDatepickerApp',['schemaForm']); 
angular
  .module('angularSchemaFormDatepickerApp', [
    
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    
  ])
  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$routeProvider', function ($controllerProvider, $compileProvider, $filterProvider, $provide, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
  