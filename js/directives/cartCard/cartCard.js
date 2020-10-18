app.directive('cartCard', function () {
  return {
    restrict: 'E',
    scope: {
      proplist: '=',
      click: '=',
      imagePrefix: '='
    },
    templateUrl: 'js/directives/cartCard/cartCard.html',
  };
});
