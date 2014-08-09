'use strict';

/**
 * @ngdoc function
 * @name angularjsF1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsF1App
 */
angular.module('angularjsF1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
