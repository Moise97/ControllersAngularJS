angular.module("controllers")
.controller("firstChildCtrl", function($scope){
    $scope.changeCase = function(){
        $scope.dataValue = $scope.dataValue.toUpperCase();
    }
});