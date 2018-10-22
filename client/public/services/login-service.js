servicesModule.factory('loginService', function($http) {
  return {
    login: function(data) {
      return $http.post('/api/login' , data);
    },

    logout: function() {
    	return $http.get('/api/logout');
    },

    register: function(data) {
      return $http.post('/api/signup', data);
    }
  }
});