const app = angular.module('shoppingCart', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/cart.html',
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
    })
    // .when('/confirmation', {
    //   templateUrl: 'views/confirmation.html',
    // })
    .when('/confirmation',{
      templateUrl: 'views/confirmation.html'
    })
    .otherwise({ redirectTo: '/' });
});
