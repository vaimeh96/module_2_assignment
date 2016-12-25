(function () {
"use strict";

angular.module('public')
.controller('NewsletterSignupController', NewsletterSignupController);

NewsletterSignupController.$inject = ['UserInfoService'];
function NewsletterSignupController(UserInfoService) {
  var userCtrl = this;
  userCtrl.user = {};
  userCtrl.submitted = false;
  userCtrl.failed = false;

  userCtrl.onSubmit = function () {
    UserInfoService.saveUserData(userCtrl.user).then(function (data) {
      if (data) {
        userCtrl.submitted = true;
        userCtrl.failed = false;
      } else {
        userCtrl.failed = true;
        userCtrl.submitted = false;
      }
    });
  }
}

})();
