app.controller('mainController', ['$http', '$scope', '$routeParams', '$window', 'alertService', function($http, $scope, $routeParams, $window, alertService) {
    var lName = $window.localStorage.getItem('name');
    if (!$routeParams.name && !lName) {
        $window.location.href = "/#/place";
    } else if (!$routeParams.name && !!lName) {
        $window.location.href = "/#/main?name=" + lName;
    }
    $scope.index = true; //确定返回键状态
    $scope.placeName = $routeParams.name;
    $http.post("http://123.206.203.130:3000/", { name: $scope.placeName }).then(function(res) {
        var data = res.data;
        $scope.list = data.sort(function(a, b) {
            return ~~a.id - ~~b.id;
        });
    }).catch(function(err) {
        alertService.add('出现错误');
        alertService.add(err.data.err);
    });
}]);
