'use strict';

angular.module('jj.version', [
  'jj.version.interpolate-filter',
  'jj.version.version-directive'
])

.value('version', '0.1');
