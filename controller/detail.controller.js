app.controller('detailController', ['$http', '$scope', '$routeParams', '$sanitize', 'alertService','shopcarService','$window', function($http, $scope, $routeParams, $sanitize, alertService,shopcarService,$window) {
    var id = $routeParams.id;
    if (!id || !$window.localStorage.name) {
        $window.location.href = "/#/main";
    };
    $scope.amount = 1;
    $scope.de = function() {
        if ($scope.amount == 1) {
            alertService.add('最小数量为1');
        } else {
            $scope.amount--;
        }
    }
    $scope.in = function() {
    	var limit=~~$scope.data.buyLimit==0?99999:~~$scope.data.buyLimit;
    	var stock=~~$scope.data.amount;
    	if($scope.amount==Math.min(limit,stock)){
    		alertService.add("超出最大够买限制");
    	}else{
    		$scope.amount++;
    	}
    }
    $scope.addShopcar=function(){
    	shopcarService.add(id,$scope.data.fruitName,$scope.amount);	
    	alertService.add("添加购物车成功");
        $scope.amount=1;
    }
    $scope.index = false; //确认返回键状态
    $http.post('http://123.206.203.130:3000/detail', { id: id }).then(function(res) {
        $scope.data = res.data;
        $scope.html = $scope.data.description.replace(/\/images/g, 'http://www.guoerdao.com:3000/images').replace(/<(h[1-4]|b)>/g, '<p>');
    }).catch(function(err) {
        alertService.add('出现错误');
        alertService.add(err.data.err);
    });

}])
