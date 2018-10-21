	angular
  .module('loginModule')
  .component('loginComponent', {
    controllerAs: 'vm',
    controller: function($scope, loginService, $state, $cookies, $rootScope) {
      const vm = $scope.vm;
      vm.school = '';

      console.log($cookies.get("session"));

      vm.login = function(Email , Password) {
        var data = {
          email: Email,
          password: Password
        };
        console.log('data ', data);
        loginService.login(data).then(function(response) {
          var user = $cookies.getObject("session");
          $rootScope.session = user;
          $state.go('index');
        }).catch(error => {
          vm.error = "Email or password is incorrect";
        });
      }
      

    },
    templateUrl: '/login/login.html'
  });
