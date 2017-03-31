
// https://forum.ionicframework.com/t/how-can-i-have-one-file-per-controller/1269/6
// http://stackoverflow.com/questions/28231367/how-to-define-controllers-in-multiple-files-angularjs

angular.module('starter.controllers')
.controller('ApiSampleCtrl', function ($scope, $state, testService) {
        $scope.getData = function (index) {
            // service 를 이용하여 외부로 모듈화 시킴 
            // testService.getData(1) 는 q 의 promiss 를 반환함 
            testService.getData(1).then(function (result) {
                $scope.body = result.body;
            })
        }

        $scope.chageData = function (index) {
            $scope.body = "change";
        }
    })