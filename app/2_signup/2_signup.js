'use strict';

angular.module('jj.2_signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/2_signup', {
    templateUrl: '2_signup/2_signup.html',
    controller: 'signupCtrl'
  });
}])

.controller('signupCtrl', [function() {

}]);