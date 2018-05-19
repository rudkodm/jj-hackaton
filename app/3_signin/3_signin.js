'use strict';

angular.module('jj.3_signin', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/3_signin', {
            templateUrl: '3_signin/3_signin.html',
            controller: 'signinCtrl'
        });
    }])

    .filter('prettyJSON', function () {
        function prettyPrintJson(json) {
            return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
        }

        return prettyPrintJson;
    })

    .controller('signinCtrl', function ($scope, $log, UserService) {
        Webcam.set({
            width: 320,
            height: 240,
            dest_width: 640,
            dest_height: 480,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#my_camera');


        $scope.take_snapshot = function () {
            Webcam.snap(function (data_base64) {
                UserService.signup('Dima', data_base64, function (data) {
                    $log.debug(data);
                    $scope.data = data
                })
            });
        }

    });