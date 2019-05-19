angular.module("controllers")
.controller("topLevelCtrl", function($scope){
    
    $scope.data = {
        dataValue: "Hello, Adam"
    };
    
    $scope.reverseText = function(){
        $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
    }
    
    $scope.changeCase = function(){
        let result = [];
        
        angular.forEach($scope.data.dataValue.split(""), function(char, index){
            result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.data.dataValue = result.join("");
    }
    
});