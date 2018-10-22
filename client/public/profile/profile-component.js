angular
  .module('profileModule')
  .component('profileComponent', {
    controllerAs: 'vm',
    controller: function($scope) {
      var vm = $scope.vm;
      vm.school = "Decode";
    },
    templateUrl: '/profile/profile.html'
  })