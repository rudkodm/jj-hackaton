'use strict';

angular.module('jj.4_final', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/4_final', {
    templateUrl: '4_final/4_final.html',
    controller: 'finalCtrl'
  });
}])

.controller('finalCtrl', [function() {

}]);