angular.module("controllers", [])
.controller("mainCtrl", function($scope){
    
    $scope.city = 'London';
    
    $scope.getCountry = function(city){
        switch(city){
            case "London": return "UK";
            case "New York": return "USA";
        }
    }
    
});