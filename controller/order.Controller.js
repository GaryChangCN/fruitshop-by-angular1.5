app.controller('orderController', ['$scope','$window','$http','alertService' ,function($scope,$window,$http,alertService){
	if(!$window.localStorage.token){
		$window.location.href="/#/login";
	}else{
		var token=$window.localStorage.token;
		$http.get('http://123.206.203.130:3000/getorder',{headers:{
			Authorization:'Bearer '+token
		}}).then(function(res){
			$scope.data=res.data.sort(function(a,b){
				var prev=a.date.replace("-","");
				var next=b.date.replace("-","");
				return ~~b-~~a;
			});
		}).catch(function(err){
			alertService.add(err.data.err);
			$window.localStorage.removeItem('token');
			$window.location.href="/#/login";
		});
		$scope.show=function(item){
			var index=$scope.data.indexOf(item);
			$scope.data[index]['show']=$scope.data[index]['show']?false:true;
		}
	}
}]);