var app = angular.module('root', ['ui.router', 'postListModule']);

app.config(function($stateProvider, $urlRouterProvider) {
  const states = [
    {
      name: 'index',
      url: '/',
      component: 'postListComponent'
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });

  $urlRouterProvider.otherwise("/");
});