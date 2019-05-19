angular.module("controllers")
.service("ZipCodes", function($rootScope){
    return {
        setZipCode: function(type, zip){
            console.log(zip);
            this[type] = zip;
            $rootScope.$broadcast("zipCodeUpdated", {
                type: type, zipCode: zip
            });
        }
    }
});