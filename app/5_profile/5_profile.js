'use strict';


angular.module('jj.5_profile', ['ngRoute'])
    .controller('profileCtrl', function ($rootScope) {
      //Finds skin tone, but makes it asynchronously through the image.onload function so the result would be available after function execution.
      var populateAverageRGB = function(photo, boundingBox) {
          let img = new Image(60, 45);   // using optional size for image
          // load an image of intrinsic size 300x227 in CSS pixels
          img.src = photo;
          var rgb = {r:0,g:0,b:0}
          img.onload = () => {
              var blockSize = 5, // only visit every 5 pixels
                  defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
                  canvas = document.createElement('canvas'),
                  context = canvas.getContext && canvas.getContext('2d'),
                  data, width, height,
                  i = -4,
                  length,
                  count = 0;
              if (!context) {
                  return defaultRGB;
              }
              height = canvas.height = img.naturalHeight;
              width = canvas.width = img.naturalWidth;
              let left = boundingBox.Left + 0.03;
              let top = boundingBox.Top;
              let leftOffset = boundingBox.Width - 0.03;
              let topOffset = boundingBox.Top - 0.03;
              context.drawImage(img, left*width, top*height, leftOffset*width, topOffset*height, 0, 0, leftOffset*width, topOffset*height);
              try {
                  data = context.getImageData(0, 0, leftOffset*width, topOffset*height);
              } catch(e) {
                  //alert('x');
                  return defaultRGB;
              }
              length = data.data.length;
              while ( (i += blockSize * 4) < length ) {
                  ++count;
                  rgb.r += data.data[i];
                  rgb.g += data.data[i+1];
                  rgb.b += data.data[i+2];
              }
              // ~~ used to floor values
              rgb.r = ~~(rgb.r/count);
              rgb.g = ~~(rgb.g/count);
              rgb.b = ~~(rgb.b/count);
              $rootScope.session.skin = rgb;
            }
              return rgb;
          };
      $rootScope.session.skin = populateAverageRGB($rootScope.session.photo, $rootScope.session.boundingBox)
    });
