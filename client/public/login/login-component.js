angular
  .module('loginModule')
  .component('loginComponent', {
    controllerAs: 'vm',
    controller: function($scope) {
      const vm = $scope.vm;
      vm.school = 'Decode';
    },
    templateUrl: '/login/login.html'
  });