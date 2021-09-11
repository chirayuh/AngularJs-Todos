app.controller('controller', ['$scope', function($scope) {
    $scope.todo = {
        title: "Things I need to do:",
        list : ["Go for a walk","Learn Fishing","Go to sleep"]
    }

    $scope.books = {
        title: "Books I need to buy:",
        list : []
    }

    $scope.addItem = function(itemList, item) {
        itemList.push(item);
    }
}])