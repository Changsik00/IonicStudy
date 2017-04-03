angular.module('starter.controllers', ['ionic', 'ionic-toast'])

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

    .controller('ModalLoginCtrl', function ($scope, $ionicModal, ionicToast) {


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

        }
    })

    .controller('LoginCtrl', function ($scope, ionicToast) {
        console.log("#@# LoginCtr");

        var title = "Test title2";

        $scope.title = title;
        
        $scope.loginClick = function () {
            console.log("#@# username : " + $scope.data.username)
            console.log("#@# password : " + $scope.data.password)

            // https://github.com/rajeshwarpatlolla/ionic-toast
            // ionicToast.show(message, position, stick, time);
            if ($scope.data.username.length == 0) {
                ionicToast.show('이름을 입력해 주세요', 'top', true, 2500);
            } else {
                $scope.modal.hide();
            }
        }
    })

    .controller('LoadingCtrl', function ($scope, $ionicLoading) {
        $scope.show = function () {
            $ionicLoading.show({
                template: 'Loading...',
                duration: 3000
            }).then(function () {
                console.log("The loading indicator is now displayed");
            });
        };
        $scope.hide = function () {
            $ionicLoading.hide().then(function () {
                console.log("The loading indicator is now hidden");
            });
        };


        $scope.show();
    });