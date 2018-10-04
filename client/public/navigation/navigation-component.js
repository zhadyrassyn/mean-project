angular
  .module('navigationModule')
  .component('navigationComponent', {
    controllerAs: 'vm',
    controller: function($scope) {
      const vm = $scope.vm;
      vm.school = 'Decode';
    },
    templateUrl: '/navigation/navigation.html'
  });
