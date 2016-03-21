( function() {
  'use strict';

  angular.module('app')
    .controller('MainController', MainController);

    MainController.$inject = ['$auth'];

    function MainController($auth) {
      var vm = this;

      vm.isAuth = function () {
        return $auth.isAuthenticated();
      };
    }




})();
