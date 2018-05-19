'use strict';

angular.module('jj.3_signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/3_signin', {
    templateUrl: '3_signin/3_signin.html',
    controller: 'signinCtrl'
  });
}])

.controller('signinCtrl', [function() {

}]);