'use strict';

angular.module('jj.3_signin', ['ngRoute'])

    .controller('signinCtrl', function ($scope, $log, UserService, SessionService) {
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
                UserService.signin(photo_base64, function (data) {
                    $log.debug(data);
                    var face = data.faceInfo.FaceDetails[0];

                    SessionService.put(data.detectedFace, {
                        name: data.detectedFace,
                        confidence: data.confidence,
                        photo: photo_base64,
                        skin: "todo",
                        age: face.AgeRange,
                        gender: face.Gender,
                        emotions: face.Emotions,
                        beard: face.Beard,
                        eyeglasses: face.Eyeglasses,
                        sunglasses: face.Eyeglasses,
                        mustache: face.Mustache
                    })
                })
            });
        }


    });