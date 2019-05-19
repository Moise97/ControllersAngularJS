angular.module("controllers")
.controller("secondChildCtrl", function($scope){
    $scope.changeCase = function(){
        $scope.dataValue = $scope.dataValue.toLowerCase();
    }
    
    $scope.shiftFour = function(){
        let result = [];
        
        angular.forEach($scope.dataValue.split(""), function(char, index){
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.dataValue = result.join("");
    }
});