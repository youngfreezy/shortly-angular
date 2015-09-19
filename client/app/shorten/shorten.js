angular.module('shortly.shorten', [])

.controller('ShortenController', function($scope, $location, Links) {
    // Your code here
    $scope.link = {};
    $scope.data = {};
    $scope.data.links = [];
    $scope.hide = true;
    $scope.showNav = true;

    $scope.addLink = function(valid) {
        //something
        if (!valid) {
            return;
        }

        $scope.hide = false
        //Links.addLink(url);
        //something else
        Links.postLink($scope.link).then(function(resp) {
            $scope.link.url = '';
            $scope.data.links.push(resp.data);
            $scope.hide = true;
        });
    };
});
