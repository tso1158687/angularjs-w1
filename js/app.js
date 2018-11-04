(function() {
    'use strict'


    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.result = "";
        $scope.errorColor = false
        $scope.Caculate = function() {
            $scope.TypeArea === undefined ? error() : cacalating()
            
            function error(){
                $scope.result="Please enter data first"
                $scope.errorColor=true;           
            }

            function cacalating(){
                var typeLength=$scope.TypeArea.split(",").length>3
                if(typeLength){
                    $scope.result = "Too Much!"
                    $scope.errorColor=true;
                }else{
                    $scope.result = "Enjoy!"
                    $scope.errorColor=false;
                }
            }
        };
    };



})()
