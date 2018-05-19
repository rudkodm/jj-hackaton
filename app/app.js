'use strict';

// Declare app level module which depends on views, and components
angular.module('jj', [
  'ngRoute',
  'jj.1_landing',
  'jj.2_signup',
  'jj.3_signin',
  'jj.4_final',
  'jj.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/1_landing'});
}]);
