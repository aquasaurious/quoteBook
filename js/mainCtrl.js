angular.module('quoteApp').controller('mainCtrl', function($scope, dataService){
    $scope.ctrlTest = "controller works \n";
    $scope.servTest = dataService.servtest;
    $scope.quotes = [];
    $scope.getQuotes = function() {
        $scope.quotes = dataService.getQuotes();
    }
    $scope.getQuotes();

    $scope.addQuote = function() {
        var newQuote = {
          text: $scope.inText,
          author: $scope.inAuthor
         };

         console.log(newQuote.text, newQuote.author);

         if(dataService.addQuote(newQuote))
          {
            $scope.inText = '';
            $scope.inAuthor = '';
          }
    };

$scope.deleteOne = function(textToDelete){
  dataService.removeData(textToDelete);
};

});