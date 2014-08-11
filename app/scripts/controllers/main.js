'use strict';

/**
 * @ngdoc function
 * @name angularjsF1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsF1App
 */
angular.module('angularjsF1App')
  .controller('MainCtrl', function ($scope, ergastAPIService) {
    $scope.seasons = [];
	ergastAPIService.getDrivers().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.seasons = response.MRData.SeasonsTable;
    });
  });
