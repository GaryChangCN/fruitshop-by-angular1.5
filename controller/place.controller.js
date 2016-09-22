app.controller('placeController', ['$scope','$http','$window','alertService', function($scope,$http,$window,alertService){
	$scope.saveLocalStorage=function(name){
		$window.localStorage.name=name;
	}
	$http({method:'GET',url:'http://www.guoerdao.com:3000/getarea'}).then(function(res){
		$scope.placeList=res.data;
	}).catch(function(err){
		alertService.add('出现错误');
		alertService.add(err.data.err);
	});
}]);