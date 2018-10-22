	angular
  .module('regestrationModule')
  .component('regestrationComponent', {
    controllerAs: 'vm',
    controller: function($scope, loginService, $cookies, $rootScope, $state) {
      const vm = $scope.vm;
      vm.school = ''

       vm.register = function(firstName, lastName, email, password, password2) {
          if (password !== password2) {
            vm.error = "Пароли не совпадают";
            return;
          }

          var data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          };

          loginService.register(data)
            .then(function(success) {
              var user = $cookies.getObject('session');
              $rootScope.session = user;
              $state.go('index');

              console.log('success ', success);
            }).catch(function(error) {
              console.log('error ', error);
          });
       }
      
    
    },

    templateUrl: '/regestration/regestration.html'
  });
