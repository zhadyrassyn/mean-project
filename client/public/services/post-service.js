var postServiceModule = angular.module('postServiceModule', []);

postServiceModule.factory('postService', function($http) {
  return {
    getPosts: function() {
      return $http.get('/api/posts');
    },

    savePost: function(formData) {
      return $http.put('/api/posts', formData, {
        headers: {
          'Content-type': undefined,
          'accept': 'application/json'
        }
      });
    },

    deletePost: id => {
      return $http.delete(`/api/posts/${id}`);
    },

    updatePost: (id, post) => {
      const url = '/api/posts/' + id;
      return $http.post(url, post, {
        'Content-type': 'application/json',
        'accept': 'application/json'
      });
    }
  }
});