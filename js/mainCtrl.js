angular.module("quoteBook").controller("mainCtrl", function($scope, dataService){

    $scope.quotes = dataService.getQuotes();

    $scope.deleteQuote = dataService.removeData;

    $scope.addQuote = dataService.addData;

});