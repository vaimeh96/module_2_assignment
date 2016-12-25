(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://stark-island-71137.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
