(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['userData', 'ApiPath'];
function UserInfoController(userData, ApiPath) {
  var infoCtrl = this;

  infoCtrl.apiPath = ApiPath;
  infoCtrl.userData = userData;
}

})();
