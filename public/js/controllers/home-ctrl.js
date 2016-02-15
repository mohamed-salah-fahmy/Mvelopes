'use strict';
// homeCtrl
appControllers.controller('homeCtrl', ['$scope', '$stateParams',
	function($scope, $stateParams) {
		console.log($stateParams.id)
	}
]);