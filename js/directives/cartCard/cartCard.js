app.directive('cartCard', function () {
  return {
    restrict: 'E',
    scope: {
      propList: '=',
    },
    templateUrl: 'js/directives/cartCard/cartCard.html',
  };
});
