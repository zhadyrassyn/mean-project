angular
  .module('postListModule')
  .component('postListComponent', {
    controller: function($scope) {
      $scope.school = 'Decode';
    },
    templateUrl: '/post-list/post-list.html'
  });