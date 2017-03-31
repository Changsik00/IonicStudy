angular.module('starter.controllers', [])

    .controller('MainCtrl', function ($scope, $state, appDataService) {
        $scope.sampleList = appDataService.getSampleList()

        $scope.gotoSamplePage = function (sample) {
            $state.go(sample.page)
        }
    })

    .controller('TransitionFirstCtrl', function ($scope, $state, $stateParams, testService) {
        $scope.$on('$ionicView.enter', function (e) {
            console.log("#@# TransitionFirstCtrl $stateParams " + $stateParams.data);
        });

        $scope.goNext = function (index) {
            $state.go('transition-second', { data: "testData" });
        }
    })

    .controller('TransitionSecondCtrl', function ($scope, $state, $ionicHistory, $stateParams) {
        $scope.$on('$ionicView.enter', function (e) {
            console.log("#@# TransitionSecondCtrl $stateParams " + $stateParams.data);
        });

        $scope.goPrev = function () {
            // 네비게이션 push - pop 관계를 주의 해야 함 
            // http://ionicframework.com/docs/api/service/$ionicHistory/

            // TODO passing data 를 할 경우 $state.go 와 같이 스택에 뷰가 쌓임 
            // var backView = $ionicHistory.backView();
            // backView.stateParams = { data: 'from second' };
            $ionicHistory.goBack();

            // $state.go('transition-first', { data: "from second" });
        }
    })

    .controller('ModalLoginCtrl', function ($scope, $state, testService) {
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
