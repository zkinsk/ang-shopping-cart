app.controller('CartController', ['$scope', function ($scope) {}]);
    $scope.totalPrice = function (items) {
      const total = items.reduce((acc, item) => {
        let { price, qty } = item;
        return acc + +price * +qty;
      }, 0);
      return total.toFixed(2).toString();
    };

    $scope.removeItem = function (id) {
      $scope.cartItems = $scope.cartItems.filter(item=> item._id !== id)
    };
  },
]);
