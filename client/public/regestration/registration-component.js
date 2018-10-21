	angular
  .module('regestrationModule')
  .component('regestrationComponent', {
    controllerAs: 'vm',
    controller: function($scope) {
      const vm = $scope.vm;
      vm.school = ''
    },
    templateUrl: '/regestration/regestration.html'
  });
