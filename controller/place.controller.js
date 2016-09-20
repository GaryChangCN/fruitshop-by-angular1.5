app.controller('placeController', ['$scope','$http','$window', function($scope,$http,$window){
	$scope.saveLocalStorage=function(name){
		$window.localStorage.name=name;
	}
	$http({method:'GET',url:'http://www.guoerdao.com:3000/getarea'}).then(function(res){
		$scope.placeList=res.data;
	});
}]);