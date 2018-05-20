'use strict';

angular.module('jj.2_signup', ['ngRoute'])

    .controller('signupCtrl', function ($scope, $log, $location, UserService, SessionService) {
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
            Webcam.snap(function (photo_base64) {
                $scope.photo_base64 = photo_base64;
                UserService.signin(photo_base64, function (data) {
                    $log.debug(data);
                    var faceDetails = data.faceInfo.FaceDetails[0];
                    $scope.user = {age: faceDetails.AgeRange.Low, gender: faceDetails.Gender.Value};

                })
            });
        };

        $scope.save = function(user) {
            UserService.signup(user.name, $scope.photo_base64, function (data) {
                $log.debug(data);
                var res = data.indexingPhotoData.FaceRecords[0];
                var face = res.Face;
                var faceDetails = res.FaceDetail;
                var sessionData = {
                    name: face.ExternalImageId,
                    confidence: face.Confidence,
                    photo: $scope.photo_base64,
                    skin: "todo",
                    age: faceDetails.AgeRange,
                    gender: faceDetails.Gender,
                    emotions: faceDetails.Emotions,
                    beard: faceDetails.Beard,
                    eyeglasses: faceDetails.Eyeglasses,
                    sunglasses: faceDetails.Eyeglasses,
                    mustache: faceDetails.Mustache
                };
                SessionService.put(user.name, sessionData);
                $scope.sessionData = sessionData;
                $location.path('/profile');
            })
        };


    });
