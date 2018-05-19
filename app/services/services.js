'use strict';

angular.module('jj.services', [])


    .service('UserService', function ($http, $log) {
        this.signup = function (user, image_base64, callback) {
            var req = {
                userName: user,
                image: image_base64
            }
            $log.debug(req);

            var res = $http.post('https://0g2dsa7j88.execute-api.eu-west-1.amazonaws.com/dev/signUp', req);
            res.success(callback);
            res.error(function (data) {
                alert("failure message: " + JSON.stringify({data: data}));
            });
        };

        this.signin = function (user, callback) {
            var req = {
                image: image_base64
            }

            var res = $http.post('https://0g2dsa7j88.execute-api.eu-west-1.amazonaws.com/dev/signIn', req)
            res.success(callback);
            res.error(function (data) {
                alert("failure message: " + JSON.stringify({data: data}));
            });
        };

        this.test_method = function () {
            return {data: 'some data'}
        };

    });