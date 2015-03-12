'use strict';

/**
 * @ngdoc function
 * @name angularSchemaFormDatepickerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSchemaFormDatepickerApp
 */

 angular.module('angularSchemaFormDatepickerApp')
 .controller('MainCtrl', function ($scope) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$scope.formData = {}; 
 	$scope.decorator = 'bootstrap-decorator';
 	$scope.sf_schema = {
 		"type": "object",
 		"properties": {
 			"birthDate": {
 				"title": "Bday",
 				"type": "string",
 				"format": "date"
 			}
 		}
 	}; 
 	$scope.sf_form = [
 		{
	    "key": "birthDate",
	    "minDate": "1995-09-01",
	    "maxDate": new Date(),
	    "format": "yyyy-mm-dd"
	  }
	];
	$scope.model = {};


 });
