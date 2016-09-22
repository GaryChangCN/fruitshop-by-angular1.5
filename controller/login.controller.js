app.controller('loginController', ['$scope','$http','alertService','$window', function($scope,$http,alertService,$window){
	$scope.submit=function(){
		var name=$scope.name;
		var password=$scope.password;
		$http.post('http://123.206.203.130:3000/login',{username:name,password:password}).then(function(res){
			var token=res.data.token;
			$window.localStorage.token=token;
			alertService.add("登陆成功");
			$window.location.href="/#/person"
		}).catch(function(err){
			alertService.add(err.data.err)
		})
	}
}]);