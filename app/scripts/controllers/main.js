'use strict';

/**
 * @ngdoc function
 * @name angularjsF1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsF1App
 */
angular.module('angularjsF1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
