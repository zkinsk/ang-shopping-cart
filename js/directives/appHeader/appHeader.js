app.directive('appHeader', function () {
  return {
    restrict: 'E',
    scope: {
      propList: '=',
    },
    templateUrl: 'js/directives/appHeader/appHeader.html',
  };
});
