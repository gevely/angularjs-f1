'use strict';

/**
 * @ngdoc function
 * @name angularjsF1App.service:ergastAPIService
 * @description
 * # ergastAPIService
 * ergast.com service wrapper
 */
angular.module('angularjsF1App')
    .factory('ergastAPIService', function ($http) {
	
		var ergastAPI = {};

		ergastAPI.getSeasons = function() {
		  return $http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/seasons'
		  });
		}

		return ergastAPI;
	});