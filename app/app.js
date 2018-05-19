'use strict';

// Declare app level module which depends on views, and components
angular.module('jj', [
    'ngRoute',
    'jj.1_landing',
    'jj.2_signup',
    'jj.3_signin',
    'jj.4_final',
    'jj.services'
])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: '1_landing/1_landing.html',
                controller: 'landingCtrl',
                activetab: '1_landing'
            })
            .when("/signup", {
                templateUrl: '2_signup/2_signup.html',
                controller: 'signupCtrl',
                activetab: '2_signup'
            })
            .when("/signin", {
                templateUrl: '3_signin/3_signin.html',
                controller: 'signinCtrl',
                activetab: '3_signin'
            })
            .when("/final", {
                templateUrl: '4_final/4_final.html',
                controller: 'finalCtrl',
                activetab: '4_final'
            })
            .otherwise({redirectTo: '/'});
    }])
;
