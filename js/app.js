angular.module('studentApp',['ngMaterial','ngAnimate','ngSanitize','ngRoute','ngMessages', 'app.login','app.user.main.page','app.http.service'])
    .config(['$routeProvider','$locationProvider',
        function($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider
                .when('/login', {
                    path: "/login",
                    templateUrl:"temp/login.html",
                    controller:'logController'
                })
                .when('/dashboard', {
                    templateUrl:"temp/dashboard.html",
                    controller:'CaseController'
                })
                
            }])
     .controller('mainCntrl',['$routeParams',function($routeParams)
    {
        this.params = $routeParams;
    }]);
