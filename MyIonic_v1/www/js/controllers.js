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

    .controller('ModalLoginCtrl', function ($scope, $ionicModal) {


        // https://github.com/kevincobain2000/ionic-animated-modal
        // http://loring-dodge.azurewebsites.net/ionic-nifty-modal/
        // https://github.com/loringdodge/ionic-nifty-modal
        // nifty-modal 적용해서 테스트

        $scope.modalClasses = ['slide-in-up', 'slide-in-down', 'fade-in-scale',
            'fade-in-right', 'fade-in-left', 'newspaper', 'jelly', 'road-runner',
            'splat', 'spin', 'swoosh', 'fold-unfold'];
        $scope.data = { username: "", password: "" }

        $ionicModal.fromTemplateUrl('templates/modal-login.html', {
            scope: $scope,
            animation: 'jelly'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.showModal = function (index) {
            $scope.modal.show();
        }

        $scope.closeModal = function () {
            $scope.modal.hide();
        }

        $scope.loginClick = function () {
            console.log("#@# username : " + $scope.data.username)
            console.log("#@# password : " + $scope.data.password)

            $scope.modal.hide();
        }
    })