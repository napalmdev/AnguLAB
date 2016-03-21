( function () {
  'use strict';

  angular.module('app')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$auth', '$state'];

    function LoginController ($auth, $state) {

      var vm = this;

      vm.user = {};

      vm.authenticate = function () {
        $auth.login(vm.user)
          .then(function(response) {
            // Redirect user here after a successful log in.
            $state.go('home', {});
          })
          .catch(function(response) {
            // Handle errors here, such as displaying a notification
            // for invalid email and/or password.
            alert(response.data.error);
            delete vm.user;
          });
      };


    };
})();
