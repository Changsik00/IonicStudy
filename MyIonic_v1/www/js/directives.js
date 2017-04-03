
// 1. app.js 에 module 추가 angular.module('starter', ['ionic','starter.directives', 'starter.controllers', 'starter.services'])
// 2. directives.js 를 만들고 디렉티브 추가 directive('loginView', function () { .. 낙타표기법으로 네이밍 
// 3. html 추가 .
// 4. controller 추가 
// https://forum.ionicframework.com/t/adding-an-angular-directive-in-ionic/1552/3
// https://forum.ionicframework.com/t/accessing-elements-in-a-directive-template/28912/12

angular.module('starter.directives', [])
    .directive('loginView', function () {
        return {
            templateUrl: "templates/directives/login-view.html"
        };
    })

    .directive('myView', function () {
        return {
            templateUrl: "templates/directives/my-view.html",
            controller: 'MyViewCtrl'
        };
    })