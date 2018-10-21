servicesModule.factory('loginService', function($http) {
  return {
    login: function(data) {
      console.log('data ', data);
      return $http.post('/api/login', data);
    },

    logout: function() {
      return $http.get('/api/logout');
    }
  }
});