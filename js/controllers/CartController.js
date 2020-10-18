app.controller('CartController', [
  '$scope',
  function ($scope) {
    $scope.cartItems = [
      {
        _id: 'asgsdfjosidf120223',
        name: 'Wireless Mouse',
        blurb: 'A mouse with no tail',
        img: 'mouse.jpeg',
        price: '30.42',
        qty: '1',
        currency: '$',
      },
      {
        _id: 'asgsdfjosidf120123',
        name: 'Wireless Keyboard',
        blurb: 'Sit way back from your work',
        img: 'wirelesskeyboard.webp',
        price: '60.03',
        qty: '1',
        currency: '$',
      },
      {
        _id: 'asgsdfjosidf1adfss',
        name: 'Sunflower Seeds',
        blurb: 'Seeds for spitting',
        img: 'seeds.jpeg',
        price: '5.32',
        qty: '1',
        currency: '$',
      },
      {
        _id: 'asgsdfjosidfsad3222',
        name: 'Desk Chair',
        blurb: 'Get your lean on',
        img: 'chair.jpg',
        price: '500.44',
        qty: '1',
        currency: '$',
      },
    ];
    $scope.salesTax = 0.05;
    $scope.shippingCosts = 10.0;
    $scope.imgPrefix = 'assets/images/';

    $scope.totalPrice = function (items) {
      const total = items.reduce((acc, item) => {
        let { price, qty } = item;
        return acc + +price * +qty;
      }, 0);
      return total.toFixed(2).toString();
    };

    $scope.removeItem = function (id) {
      $scope.cartItems = $scope.cartItems.filter((item) => item._id !== id);
    };
  },
]);
