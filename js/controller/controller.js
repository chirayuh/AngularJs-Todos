app.controller('controller', ['$scope' ,'$http', function($scope , $http) {
    $scope.todo = {
        title: "Things I need to do:",
        list : ["Go for a walk","Learn Fishing","Go to sleep"]
    }

    $scope.books = {
        title: "Books I need to buy:",
        list : []
    }

    function hadOnlyNumber(item)
    {
        return /^[0-9]*$/.test(item);
    }

    $scope.addItem = function(itemList, item) {
        // ISBN : 10 or 13 length and consist of only Numbers.
        if( (item.length === 10 || item.length === 13) && hadOnlyNumber(item))
        {
            //Sample-ISBN: 0747532695
            $http({
                method: 'get', 
                url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ item
            }).then(function (response) {
                data = response.data;
                itemList.push("Title: "+ data.items[0].volumeInfo.title +" \n Author(s): "+ data.items[0].volumeInfo.authors);
            },function (error){
                console.log(error, 'can not get data.');
            });
        }
        else 
        {
            itemList.push(item);
        }
    }
}])