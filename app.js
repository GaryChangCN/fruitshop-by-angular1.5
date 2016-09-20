function resize() {
    var Width = document.documentElement.clientWidth ? document.documentElement.clientWidth : window.innerWidth;
    if (Width <= 768) {
        var rem = Width / 10;
        document.querySelector("html").style.fontSize = rem + "px";
    } else {
        document.querySelector("html").style.fontSize = 41.4 + "px";
    }
}
resize();
window.addEventListener("resize", function() {
    resize();
});
var app = angular.module('guoerdao', ['ngRoute', 'ngTouch', 'ngSanitize']);
//component
app.component('cHeader', {
    templateUrl: 'template/header.html',
    controller: 'headerController'
}).component('cCarousel', {
    templateUrl: 'template/carousel.html',
    controller: 'carouselController'
}).component('cShopcarhover',{
    templateUrl:'template/shopcarHover.html',
    controller:'shopcarController'
})
//directive

app.directive('myAlert', function() {
    return {
        restrice: 'ECMA',
        replace: true,
        scope: {
            myData: '='
        },
        templateUrl: 'template/alert.html'
    };
});
//service
app.factory('alertService', ['$rootScope','$timeout', function($rootScope, $timeout){
    var alertService = {};
    $rootScope.alerts = [];
    alertService.closeAlert = function(alert) {
        alertService.closeAlertIdx($rootScope.alerts.indexOf(alert));
    };

    alertService.closeAlertIdx = function(index) {
        $rootScope.alerts.splice(index, 1);
    };

    alertService.add = function(msg) {
        var tmp = {
            msg: msg,
            close: function() { alertService.closeAlert(this) }
        }
        $rootScope.alerts.push(tmp);
        $timeout(function() {
            $rootScope.alerts.shift();
        }, 2500);
    };
    return alertService;
}]);
app.factory('shopcarService', ['$rootScope', function($rootScope){
    var shopcarService={};
    $rootScope.shopcar={};
    $rootScope.count=0;
    shopcarService.add=function(id,name,amount){
        if(!$rootScope.shopcar[id]){
            $rootScope.shopcar[id]={
                name:name,
                amount:0
            };
            $rootScope.count++;
        }
        $rootScope.shopcar[id].amount+=amount;
    };
    shopcarService.update=function(id,amount){
        $rootScope.shopcar[id].amount+=amount;
    }
    shopcarService.delete=function(id){
        $rootScope.count--;
        delete $rootScope.shopcar[id];
    }
    shopcarService.clear=function(){
        $rootScope.shopcar={};
        $rootScope.count=0;
    }
    return shopcarService;
}])

app.config(['$routeProvider', function($routerProvider) {
    $routerProvider.when('', {
        redirectTo: '/main'
    }).when('/main', {
        templateUrl: 'page/main.html',
        controller: 'mainController'
    }).when('/place', {
        templateUrl: 'page/place.html',
        controller: 'placeController'
    }).when('/detail', {
        templateUrl: 'page/detail.html',
        controller: 'detailController'
    }).when('/shopcar',{
        templateUrl:'page/shopcar.html',
        controller:'shopcarController'
    }).otherwise({
        redirectTo: '/main'
    })
}])
