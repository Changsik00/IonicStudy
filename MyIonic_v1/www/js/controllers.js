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
            $scope.modal.hide();
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

                showDelay: 0,
                animation: 'fade-in',
                template: '<ion-spinner class="spinner-calm" icon="lines"></ion-spinner><div>Loading...</div>',
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
    })

    .controller('MyViewCtrl', function ($scope, $stateParams) {
        $scope.click = function () {
            $scope.callback($scope.title)
        }
    })

    .controller('DirectivewCtrl', function ($scope, $stateParams) {
        $scope.titles = ['test1', 'test2'];

        $scope.callback = function (title) {
            console.log("#@# DirectivewCtrl title " + title);
        }
    })


    .controller('RadioCtrl', function ($scope, $stateParams) {
        $scope.items = [
            'AG',
            'AH',
            'AI',
            'AJ',
            'AK',
            'AL',
            'AA',
            'AB',
            'AC',
            'AD',
            'AE',
            'AF'
        ];

        $scope.options = {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 10,
            speed: 300,
            pagination: '',
            paginationClickable: true,
        }

        $scope.slideTo = function (item) {
            $scope.slider.slideTo(3);
        }

        $scope.buttonClick = function () {
            $scope.selected = $scope.items[5];
        }

        $scope.$on("$ionicView.enter", function (event, data) {

            var $reportMenuGroup = $('input[type=radio][name=report-menu-group]');
            $reportMenuGroup.each(function () {
                $(this).prop('checked', this.value == $scope.selected);
            });

            $reportMenuGroup.on('change', function () {
                if (this.checked) {
                    selectedMoveTo(this.value);
                }
            });
        });


        $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
            $scope.slider = data.slider;
            selectedMoveTo($scope.items[5]);
        });

        function selectedMoveTo(value) {
            $scope.selected = value;
            var moveTo = $scope.items.indexOf(value) - 1;
            if (moveTo < 0) {
                moveTo = 0;
            }
            $scope.slider.slideTo(moveTo);
            // http://utk-unm.blogspot.kr/2015/03/angularjs-digest-vs-apply-vs-timeout-vs.html
            // $scope.$digest();
            $scope.safeApply();
        }
    })