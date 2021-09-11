app.controller('controller', ['$scope', function($scope) {
    $scope.list = ["Go for a walk","Learn Fishing","Go to sleep"];
    $scope.addItem = function() {
        $scope.list.push($scope.addTodo);
        $scope.addTodo = '';
    }
}])