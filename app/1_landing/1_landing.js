'use strict';

angular.module('jj.1_landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/1_landing', {
    templateUrl: '1_landing/1_landing.html',
    controller: '1_landingCtrl'
  });
}])

.controller('1_landingCtrl', [function() {

}]);