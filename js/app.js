( function () {
  'use strict';

  angular.module('app', ['mgcrea.ngStrap', 'ui.router', 'satellizer'])
    .constant('API_URL',  'http://54.94.213.49/api')
    .config( function($stateProvider, $urlRouterProvider, $authProvider, API_URL) {

      $authProvider.loginUrl = API_URL+'/auth';
      $authProvider.signupUrl = API_URL+'/register';

      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html',
          controller: 'HomeController as home'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'templates/about.html',
          controller: 'AboutController as about'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginController as login'
        });


    });



})();
