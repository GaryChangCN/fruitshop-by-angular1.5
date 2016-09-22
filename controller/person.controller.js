app.controller('personController', ['$scope','$window', function($scope,$window){
	if(!$window.localStorage.token){
		$window.location.href="/#/login";
	}
}]);