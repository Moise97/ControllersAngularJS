angular.module("controllers")
.controller("topLevelCtrl", function($scope){
    
    $scope.dataValue = "Hello, Adam";
    
    $scope.reverseText = function(){
        $scope.dataValue = $scope.dataValue.split("").reverse().join("");
    }
    
    $scope.changeCase = function(){
        let result = [];
        
        angular.forEach($scope.dataValue.split(""), function(char, index){
            result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.dataValue = result.join("");
    }
    
});