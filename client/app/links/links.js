angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  //scope object should have a data property 
  $scope.data = {};
  // scope object should have a .getLinks method
  $scope.getLinks = function(){
    // call the getLinks method from Links factory
    Links.getLinks().then(function(data){
      // assing the returned links to data
      $scope.data.links = data.data;
    });
  };

  $scope.getLinks();
});
