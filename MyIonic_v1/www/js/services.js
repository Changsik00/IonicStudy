angular.module('starter.services', [])

    // http://webframeworks.kr/tutorials/angularjs/angularjs_promise_deferred/
    .factory('testService', function ($q, $http) {

        function getData(index) {
            var deferred = $q.defer();
            var url = 'https://jsonplaceholder.typicode.com/posts/' + index
            $http.get(url)
                .success(function (json) {
                    deferred.resolve(json);
                })
                .error(function (error, code) {
                    deferred.reject(error);
                    $log.error("#@# error " + error, code);
                });

            return deferred.promise;
        }

        function getData2() {
            var deferred = $q.defer();
            var url = 'https://jsonplaceholder.typicode.com/posts/'
            var params = { id: 1, title: 'foo', body: 'bar', userId: 1 };

            $http.post(url, params, null)
                .success(function (json) {
                    deferred.resolve(json);
                })
                .error(function (error, code) {
                    deferred.reject(error);
                    $log.error("#@# error " + error, code);
                });

            return deferred.promise;
        }

        return {
            getData: getData, 
            getData2: getData2, 
        };
    })