angular.module('starter.controllers', [])

    .controller('MainCtrl', function ($scope, $state, appDataService) {
        $scope.sampleList = appDataService.getSampleList()

        $scope.gotoSamplePage = function (sample) {
            $state.go(sample.page)
        }
    })

    .controller('AppCtrl', function ($scope, $state, testService) {
        $scope.goNext = function (index) {
            $state.go('home', { data: "testData" });
        }

        $scope.getData = function (index) {
            console.log("#@# getData()")
            testService.getData(1).then(function (result) {
                console.log("#@# scope bind + " + result.body)
                $scope.body = result.body;
            })
        }

        $scope.chageData = function (index) {
            $scope.body = "change";
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
