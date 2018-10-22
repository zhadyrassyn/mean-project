angular
  .module('navigationModule')
  .component('navigationComponent', {
    controllerAs: 'vm',
    controller: function($scope , $cookies , $rootScope , loginService , $state) {
      const vm = $scope.vm;
      vm.school = 'Decode';

      if($cookies.get("session")){
		$rootScope.session = $cookies.getObject("session");
      }

      vm.logout = function() {
      	loginService.logout()
      	.then(function(response) {
      		$rootScope.session = null;
          $state.go('index');
        })
        .catch(function(error) {
          console.log('error ', error);
        });
      	console.log("logout");
      }
    },

    templateUrl: '/navigation/navigation.html'
  });
