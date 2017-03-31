// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

     .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })

      .state('transition-first', {
        url: '/transition-first',
        params: { data: null },
        templateUrl: 'templates/transition-first.html',
        controller: 'TransitionFirstCtrl'
      })

      .state('transition-second', {
        url: '/transition-second',
        params: { data: null },
        templateUrl: 'templates/transition-second.html',
        controller: 'TransitionSecondCtrl'
      })

      .state('api-sample', {
        url: '/api-sample',
        templateUrl: 'templates/api-sample.html',
        controller: 'ApiSampleCtrl'
      })
      
      .state('modal-login', {
        url: '/modal-login',
        templateUrl: 'templates/modal-login.html',
        controller: 'ModalLoginCtrl'
      })

    $urlRouterProvider.otherwise('/main');
  })
