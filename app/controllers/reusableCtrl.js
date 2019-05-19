angular.module("controllers")
.controller("reusableCtrl", function($scope, $rootScope){
    
    // registers a handler function that is invoked when the specified event 
    // is received by the scope.
    $scope.$on("zipCodeUpdated", function(event, args){
        console.log(args);
        $scope[args.type] = args.zipCode;
    });
    
    $scope.setAddress = function(type, zip){
        // sends an event fro the current scope down to all of the child scopes
        $rootScope.$broadcast("zipCodeUpdated", {
            type: type, zipCode: zip
        });
    }
    
    $scope.copyAddress = function(){
        $scope.zip = $scope.billingZip;
    }
    
    // $emit(name, args) - emit an event from the current scope up to the root scope.
    
});