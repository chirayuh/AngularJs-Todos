app.controller('controller', ['$scope', function($scope) {
    $scope.todo = {
        list : ["Go for a walk","Learn Fishing","Go to sleep"]
    }

    $scope.books = {
        list : []
    }

    $scope.addItem = function(itemList, item) {
        itemList.push(item);
    }
}])