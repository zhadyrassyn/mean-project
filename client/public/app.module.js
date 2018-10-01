var app = angular.module('root', ['ui.router', 'postListModule', 'postDetailModule']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  const states = [
    {
      name: 'index',
      url: '/',
      component: 'postListComponent'
    },
    {
      name: 'detail',
      url: '/detail',
      component: 'postDetailComponent'
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });

  $urlRouterProvider.otherwise("/");
});