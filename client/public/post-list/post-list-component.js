angular
  .module('postListModule')
  .component('postListComponent', {
    controllerAs: 'vm',
    controller: function($scope, postService) {
      var vm = $scope.vm;
      vm.school = 'Decode';

      vm.posts = [];
      vm.showAddModalFlag = false;
      vm.showEditModalFlag = false;

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
        const post = { author, title, content };

        postService.savePost(post)
          .then(response => {
            const savedPost = response.data;
            vm.posts.push(savedPost);
            vm.closeAddModal();
          }).catch(error =>
          console.log('error ', error)
        );
      };

      vm.deletePost = id => {
        postService.deletePost(id)
          .then(response => {
            if (response.status === 200) {
              vm.posts = vm.posts.filter(post => post._id !== id);
            } else {
              console.log('response ', response);
            }
          }).catch(error => console.log('error ', error));
      };

      vm.editPost = post => {
        vm.showEditModalFlag = true;
        vm.editId = post._id;
        vm.editAuthor = post.author;
        vm.editTitle = post.title;
        vm.editContent = post.content;
      };

      vm.updatePost = (id, author, title, content) => {
        const post = {author, title, content};
        postService.updatePost(id, post)
          .then(response => {
            const index = vm.posts.findIndex(item => id === item._id);
            if (index !== -1) {
              vm.posts.splice(index, 1, response.data);
            }
            vm.closeEditModal();
          }).catch(error => console.log('error ', error));
      };

      vm.closeEditModal = () => {
        vm.showEditModalFlag = false;
      };

      postService.getPosts()
        .then(function(success) {
          vm.posts = success.data.posts;
        }).catch(function(error) {
          console.log('error ', error);
        });
    },
    templateUrl: '/post-list/post-list.html'
  });