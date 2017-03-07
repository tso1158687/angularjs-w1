(function() {
    'use strict'


    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.result = ""; //結果文字 result text
        $scope.TypeArea = ""; //輸入框 input
        $scope.stringLength = 0; //輸入內容偵測 text length
        console.log($scope.TypeArea);
        $scope.Caculate = function() {
            var output = $scope.TypeArea.split(",").length;
            var length = $scope.TypeArea.length;
            var resultText = document.getElementById("result");
            var resultTextInput = document.getElementById("lunch-menu");
            if (length == 0) {
                $scope.result = "Please enter data first"
                resultText.classList.add("red");
                resultTextInput.classList.add("red-border");
            } else {
                if (output > 3) {
                    $scope.result = "Too Much!"
                    resultText.classList.add("green");
                    resultTextInput.classList.add("green-border");
                } else {
                    $scope.result = "Enjoy!"
                    resultText.classList.add("green");
                    resultTextInput.classList.add("green-border");
                }
            };




        };
    };



})()
