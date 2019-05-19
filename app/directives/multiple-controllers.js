angular.module("controllers")
.directive("customDirective", function(){
    return {
        restrict: 'E',
        templateUrl: "/app/views/controllers-directive.html"
    };
});