angular.module("controllers")
.controller("reusableCtrl", ["$scope", "ZipCodes", function($scope, zipCodes){
    
    $scope.$on("zipCodeUpdated", function(event, args){
        $scope[args.type] = args.zipCode;
    });
    
    $scope.setAddress = function(type, zip){
        zipCodes.setZipCode(type, zip);
    }
    
    $scope.copyAddress = function(){
        $scope.zip = $scope.billingZip;
    }
    
}]);