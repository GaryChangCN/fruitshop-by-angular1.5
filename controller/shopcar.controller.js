app.controller('shopcarController', ['$scope','$rootScope','shopcarService', function($scope,$rootScope,shopcarService){
	$rootScope.$watch("count",function(newVal,oldVal){
		$scope.sum=newVal;
	});
	$scope.shopcar=$rootScope.shopcar;
	$scope.in=function(id){
		shopcarService.update(id,1);
	};
	$scope.de=function(id,amount){
		if(amount==1){
			shopcarService.delete(id);
		}else{
			shopcarService.update(id,-1);
		}
	};
//这里有个bug 购物车没做够买限制处理
	$scope.delete=function(id){
		shopcarService.delete(id);
	};
	$scope.clear=function(){
		$scope.shopcar={};
		shopcarService.clear();
	}
}])