angular.module("quoteBook").controller("mainCtrl", function($scope, dataService){

    $scope.quotes = dataService.getQuotes();

    $scope.deleteQuote = dataService.removeData;

    $scope.addQuote = dataService.addData;

    $scope.saveQ = function() {
        window.localStorage.set("quoteStore", JSON.stringify($scope.quotes));
    }

    $scope.loadQ = function() {
        $scope.quotes = JSON.parse(window.localStorage.get("quoteStore"));
    }

});