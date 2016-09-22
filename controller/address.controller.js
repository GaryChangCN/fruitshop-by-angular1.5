app.controller('addressController', ['$scope', '$window', '$http', 'alertService', function($scope, $window, $http, alertService) {
    if (!$window.localStorage.token) {
        $window.location.href = "/#/login";
    } else {
        var token = $window.localStorage.token;
        $scope.showAdd = false;
        $http.get('http://123.206.203.130:3000/address', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(function(res){
        	$scope.data=res.data;
        }).catch(function(err){
        	//alertService.add(err.data.err);
        });
        $scope.submitAdd = function() {
            $scope.upload = {
                address: $scope.address,
                name: $scope.name,
                phone: $scope.phone,
                _id: "-1"
            };
            $http.post('http://123.206.203.130:3000/editaddress', $scope.upload, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function(res) {
                alertService.add('添加成功');
                $scope.closeAdd();
                $window.location.reload();
            }).catch(function(err) {
                alertService(err.data.err);
                $window.localStorage.removeItem('token');
                $window.location.href = "/#/login";
            });
        };
        $scope.add = function() {
            $scope.showAdd = true;
        }
        $scope.closeAdd = function() {
            $scope.showAdd = false;
        };
        $scope.setDefault=function(){
        	alertService.add('暂时没做此功能');
        }
        $scope.deleteAddress=function(_id){
        	$http.post('http://123.206.203.130:3000/deleteaddress', {_id:_id}, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function(res) {
                alertService.add('删除成功');
                $scope.closeAdd();
                $window.location.reload();
            }).catch(function(err) {
                alertService(err.data.err);
                $window.localStorage.removeItem('token');
                $window.location.href = "/#/login";
            });
        }
    }
}])
