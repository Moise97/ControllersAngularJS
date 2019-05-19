angular.module("controllers")
.controller("firstChildCtrl", function($scope){
    $scope.changeCase = function(){
        $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
    }
});