'use strict';
// loginCtrl
appControllers.controller('loginCtrl', ['$scope', '$state',
	function($scope, $state) {
		$scope.user = {name:"", password: ""};
		$scope.login = function(valid) {
			if(valid){
				console.log($scope.form)
				console.log(valid)
				console.log($scope.user.name);
				console.log($scope.user.password);
				$state.go("nav.home", {id: $scope.user.name});
			}
		}
		$scope.changeForm = function () {
			$scope.isLoginForm = !$scope.isLoginForm
		}
	}
]);