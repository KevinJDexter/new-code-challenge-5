const app = angular.module('MessageBoardApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/message.html',
    controller: 'MessageBoardController as vm'
  })
    .otherwise({
      template: '<h2>404</h2>'
    })
})