angular
  .module('postDetailModule')
  .component('postDetailComponent', {
    controllerAs: 'vm',
    controller: function($scope, postService, $state) {
      const vm = $scope.vm;
      vm.school = "Decode";

      const id = $state.params.postID;
      postService.getPostById(id)
        .then(function(response) {
          vm.currentPost = response.data.post;
        })
        .catch(function(error) {
          console.log('error ', error);
        });
    },
    templateUrl: '/post-detail/post-detail.html'
  });