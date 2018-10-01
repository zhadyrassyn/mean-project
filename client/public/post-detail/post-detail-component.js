angular
  .module('postDetailModule')
  .component('postDetailComponent', {
    controllerAs: 'vm',
    controller: function($scope) {
      const vm = $scope.vm;
      vm.school = "Decode";
    },
    templateUrl: '/post-detail/post-detail.html'
  });