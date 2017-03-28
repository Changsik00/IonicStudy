angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location) {
  $scope.$on('$ionicView.enter', function(e) {
      console.log("#@# AppCtrl $ionicView.enter");
  });

  $scope.goNext = function(index) {
      $location.path('/home')
  }
})

.controller('HomeCtrl', function($scope, $location) {
  $scope.goPrev = function() {
      $location.path('/app');
  }
})
