angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.$on('$ionicView.enter', function(e) {
      console.log("#@# AppCtrl $ionicView.enter");
  });

  $scope.goNext = function(index) {
      $state.go('home',{data:"testData"});
  }
})

.controller('HomeCtrl', function($scope, $state, $stateParams) {
  $scope.$on('$ionicView.enter', function(e) {
      console.log("#@# $stateParams " + $stateParams.data);
  });

  $scope.goPrev = function() {
      $state.go('app'); // '/app' 으로 하면 Error: Could not resolve '/app' from state 'home'
  }
})
