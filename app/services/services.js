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
                alert("TODO: Second step of verification required");
                // alert("failure message: " + JSON.stringify({data: data}));
            });
        };

        this.signin = function (image_base64, callback) {
            var req = {
                image: image_base64
            }

            var res = $http.post('https://0g2dsa7j88.execute-api.eu-west-1.amazonaws.com/dev/signIn', req)
            res.success(callback);
            res.error(function (data) {
                alert("TODO: Second step of verification required");
                // alert("failure message: " + JSON.stringify({data: data}));
            });
        };

        this.test_method = function () {
            return {data: 'some data'}
        };

    })


    .service('SessionService', function ($log) {
        this.sessions = {};
        this.loginCompleted = function (userName) {
            return !!this.sessions[userName];
        };
        this.put = function (userName, newData) {
            $log.debug('session_put',userName, newData);
            var oldData = this.sessions[userName];
            this.sessions[userName] = newData;
            return oldData;
        };
        this.add = function (userName, newData) {
            $log.debug('session_add',userName, newData);
            var oldData = this.sessions[userName];
            this.sessions[userName] = Object.assign(oldData, newData);
            return oldData;
        };

        this.get = function (userName) {
            $log.debug('session_get',userName);
            return this.sessions[userName];
        };

        this.drop = function (userName) {
            $log.debug('session_drop',userName);
            var oldData = this.sessions[userName];
            delete this.sessions[userName];
            return oldData;
        };
    })
;