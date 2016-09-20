app.controller('headerController', ["$scope", '$routeParams', function($scope, $routeParams){
    $scope.index = $scope.$parent.index;
        $scope.title = window.localStorage.name;
        $scope.removeLocalStorage = function() {
            window.localStorage.removeItem('name');
        };
        $scope.back = function() {
            window.history.back();
        };
        document.addEventListener("scroll", function() {
            var scrollT = document.body.scrollTop;
            if (scrollT <= 100) {
                var top = (-1.2 + 2.2 * scrollT / 100).toFixed(1);
                angular.element(document.querySelector(".personHover")).css('top', top + 'rem');
            }
        });
}])