angular.module("controllers")
.controller("secondChildCtrl", function($scope){
    $scope.changeCase = function(){
        $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
    }
    
    $scope.shiftFour = function(){
        let result = [];
        
        angular.forEach($scope.data.dataValue.split(""), function(char, index){
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.data.dataValue = result.join("");
    }
});