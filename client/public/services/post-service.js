var postServiceModule = angular.module('postServiceModule', []);

postServiceModule.factory('postService', function($http) {
  return {
    getPosts: function() {
      return $http.get('/api/posts');
    }
  }
});