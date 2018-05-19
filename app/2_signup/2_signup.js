'use strict';

angular.module('jj.2_signup', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/2_signup', {
            templateUrl: '2_signup/2_signup.html',
            controller: 'signupCtrl'
        });
    }])

    .directive('demoFileModel', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.demoFileModel),
                    modelSetter = model.assign;
                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    })

    .service('fileUploadService', function ($http, $q) {
        this.uploadFileToUrl = function (file, uploadUrl) {
            //FormData, object of key/value pair for form fields and values
            var fileFormData = new FormData();
            fileFormData.append('file', file);

            var deffered = $q.defer();
            $http.post(uploadUrl, fileFormData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}

            }).success(function (response) {
                deffered.resolve(response);

            }).error(function (response) {
                deffered.reject(response);
            });

            return deffered.promise;
        }
    })


    .controller('signupCtrl', function ($scope, fileUploadService) {

        $scope.uploadFile = function () {
            var file = $scope.myFile;
            var uploadUrl = "../server/service.php", //Url of webservice/api/server
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

            promise.then(function (response) {
                $scope.serverResponse = response;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
        };
    });
