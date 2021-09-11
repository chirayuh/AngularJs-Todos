app.directive('singleList', function() {
    return {
        restrict: 'E',
        scope: {
            mylist: '='
        },
        templateUrl: 'js/directives/singleList.html'
    }
})