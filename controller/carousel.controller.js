app.controller('carouselController', ["$scope", "$http", "$interval", function($scope, $http, $interval){
	$http.get('http://www.guoerdao.com:3000/getimg').then(function(res) {
            $scope.img = res.data;
            $scope.width = (res.data.length * 9.4).toFixed(1) + "rem";
            $scope.style = "carousel";
            $scope.translate = 0;
            var a = $interval(function() {
                if ($scope.translate < 9.4 * (res.data.length - 1)) {
                    $scope.translate += 9.4;
                } else {
                    $scope.translate = 0;
                }
            }, 2500);
            $scope.swipeLeft = function() {
                if ($scope.translate < 9.4 * (res.data.length - 1)) {
                    $scope.translate += 9.4;
                }
            };
            $scope.swipeRight = function() {
                $scope.translate -= 9.4;
            }
        });
}]);