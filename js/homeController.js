(function () {

  'use strict';

  angular.module('app')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    function HomeController($http) {
      var vm = this;
      vm.getUsers = function () {
        $http.get('http://54.94.213.49/api/user').then( function (response) {
          vm.users = response.data;
        });
      };
    };

})();
