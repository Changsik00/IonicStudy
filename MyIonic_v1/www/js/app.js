// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.directives', 'starter.controllers', 'starter.services', 'ngMaterial'])

  .run(function ($ionicPlatform, $rootScope, $state) {
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

    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams) {
        console.log("#@# stateChangeStart")
      });

    $rootScope.safeApply = function (fn) {
      if (this.$root.$$phase == '$apply' || this.$root.$$phase == '$digest') {
        if (fn && (typeof (fn) === 'function')) {
          fn();
        }
      }
      else {
        this.$apply(fn);
      }
    };

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

      .state('modal-sample', {
        url: '/modal-sample',
        templateUrl: 'templates/modal-sample.html',
        controller: 'ModalLoginCtrl'
      })

      .state('loading', {
        url: '/loading',
        template: '<ion-view view-title="Loading"></ion-view>',
        controller: 'LoadingCtrl'
      })

      .state('directive-view', {
        url: '/directive-view',
        templateUrl: 'templates/directive-view.html',
        controller: 'DirectivewCtrl'
      })

      .state('radio-sample', {
        url: '/radio-sample',
        templateUrl: 'templates/radio-sample.html',
        controller: 'RadioCtrl'
      })
      .state('material-sample', {
        url: '/material-sample',
        templateUrl: 'templates/material-sample.html',
        controller: 'MaterialCtrl'
      })

    $urlRouterProvider.otherwise('/main');
  })
