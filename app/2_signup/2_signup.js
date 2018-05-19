'use strict';

angular.module('jj.2_signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/2_signup', {
    templateUrl: '2_signup/2_signup.html',
    controller: '2_signupCtrl'
  });
}])

.controller('2_signupCtrl', [function() {

}]);