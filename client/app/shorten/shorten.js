angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = '';

  $scope.addLink = function (url) {
    //something
    Links.addLink(url);
    //something else
  }
});
