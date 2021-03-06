var app = angular.module('root', ['ui.router', 'postListModule', 'postDetailModule', 'navigationModule' ,
 'loginModule' , 'regestrationModule' , 'servicesModule' , 'ngCookies', 'profileModule']);

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
      url: '/detail/{postID}',
      component: 'postDetailComponent'
    },
    {
      name: 'login',
      url: '/login',
      component: 'loginComponent'
    },
    {
      name: 'regestration',
      url: '/regestration',
      component: 'regestrationComponent'
    },
    {
      name: 'profile',
      url: '/profile',
      component: 'profileComponent'
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });

  $urlRouterProvider.otherwise("/");
});