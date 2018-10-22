	angular
  .module('loginModule')
  .component('loginComponent', {
    controllerAs: 'vm',
    controller: function($scope , loginService , $state ,$cookies , $rootScope) {
      const vm = $scope.vm;
      vm.school = '';

      vm.login = function(Email , Password) {
        var data = {
          email: Email,
          password: Password
        }
        loginService.login(data)

        .then(function(response) {
          var user = $cookies.getObject('session');
          $rootScope.session = user;
          $state.go('index');
        })

        .catch(function(error) {
            vm.error = 'login or password is invalid';  
          
        });
      }
      

    },
    templateUrl: '/login/login.html'
  });
