angular.module("controllers")
.controller("reusableCtrl", function($scope){
    
    $scope.setAddress = function(type, zip){
        console.log("Type: " + type + " and ZIP: " + zip);
    }
    
    $scope.copyAddress = function(){
        $scope.shippingZip = $scope.billingZip;
    }
    
});