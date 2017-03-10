var app = angular.module("app.login",[]);
app.controller('logController',logController);

	logController.$inject =['$window','$scope', '$location','httpUser'];
	function logController($window,$scope, $location,httpUser){
		$scope.user = {};
		$scope.loginFrame = true;
		$scope.regFrame = true;
        $scope.signIn = function () {
            $scope.res = httpUser.public({
                method:'post',
                url:'/auth/signUp',
				params:{
					email:$scope.formData.email,
                	password:$scope.formData.password
                }
            });
        }
	};