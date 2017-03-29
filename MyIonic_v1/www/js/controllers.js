angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $state, testService) {
        $scope.$on('$ionicView.enter', function (e) {
            var promise = testService.getData(1);
            promise.then(function (result) {
                console.log(result.body);
            })
            
            testService.getData2().then(function (result) {
                console.log(result);
            })
        });

        $scope.goNext = function (index) {
            $state.go('home', { data: "testData" });
        }
    })

    .controller('HomeCtrl', function ($scope, $state, $stateParams) {
        $scope.$on('$ionicView.enter', function (e) {
            console.log("#@# $stateParams " + $stateParams.data);
        });

        $scope.goPrev = function () {
            $state.go('app'); // '/app' 으로 하면 Error: Could not resolve '/app' from state 'home'
        }
    })
