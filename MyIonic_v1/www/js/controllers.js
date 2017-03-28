angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location) {
  $scope.$on('$ionicView.enter', function(e) {
      console.log("#@# AppCtrl $ionicView.enter");
  });

  $scope.goNext = function(index) {
      $location.path('/home')
  }
})

.controller('HomeCtrl', function($scope, $state) {
  $scope.goPrev = function() {
      $state.go('app'); // '/app' 으로 하면 Error: Could not resolve '/app' from state 'home'
  }
})
