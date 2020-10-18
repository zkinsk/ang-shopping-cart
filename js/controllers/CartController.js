app.controller('CartController', ['$scope', function ($scope) {}]);
    $scope.removeItem = function (id) {
      $scope.cartItems = $scope.cartItems.filter(item=> item._id !== id)
    };
  },
]);
