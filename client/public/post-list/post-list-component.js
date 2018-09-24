angular
  .module('postListModule')
  .component('postListComponent', {
    controllerAs: 'vm',
    controller: function($scope, postService) {
      var vm = $scope.vm;
      vm.school = 'Decode';

      vm.posts = [];
      vm.showAddModalFlag = false;

      vm.showAddModal = function() {
         vm.showAddModalFlag = true;
      };

      vm.closeAddModal = function() {
        vm.showAddModalFlag = false;
        vm.addAuthor = "";
        vm.addTitle = "";
        vm.addContent = "";
      };

      vm.savePost = function(author, title, content) {
        console.log(author);
        console.log(title);
        console.log(content);
      };``

      postService.getPosts()
        .then(function(success) {
          vm.posts = success.data.posts;
        }).catch(function(error) {
          console.log('error ', error);
        });
    },
    templateUrl: '/post-list/post-list.html'
  });