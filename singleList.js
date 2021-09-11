app.directive('singleList', function() {
    return {
        restrict: 'E',
        scope: {
            mylist: '='
        },
        templateUrl: 'singleList.html'
    }
})