(function () {
  "use strict";

  angular.module('public').service('UserInfoService', UserInfoService);


  UserInfoService.$inject = ['$http', 'ApiPath'];
  function UserInfoService($http, ApiPath) {
    var service = this;
    service.user = undefined;

    service.saveUserData = function (user) {
      var url = ApiPath + '/menu_items/' + user.favMenuItem + '.json';
      return $http.get(url).then(function (response) {
        service.user = user;
        service.user.favItem = response.data;
        return true;
      }).catch(function () {
        service.user = undefined;
        return false;
      });
    };

    service.getUserData = function () {
      return service.user;
    }
  }
})();
