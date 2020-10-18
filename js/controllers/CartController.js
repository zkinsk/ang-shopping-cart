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
        qty: 1,
        currency: '$',
      },
      {
        _id: 'asgsdfjosidf120123',
        name: 'Wireless Keyboard',
        blurb: 'Sit way back from your work',
        img: 'wirelesskeyboard.webp',
        price: '60.03',
        qty: 1,
        currency: '$',
      },
      {
        _id: 'asgsdfjosidf1adfss',
        name: 'Sunflower Seeds',
        blurb: 'Seeds for spitting',
        img: 'seeds.jpeg',
        price: '5.32',
        qty: 1,
        currency: '$',
      },
      {
        _id: 'asgsdfjosidfsad3222',
        name: 'Desk Chair',
        blurb: 'Get your lean on',
        img: 'chair.jpg',
        price: '500.44',
        qty: 1,
        currency: '$',
      },
    ];

    $scope.salesTaxRate = 0.05;
    $scope.salesTax = 0;
    $scope.shippingCosts = 10.0;
    $scope.imgPrefix = 'assets/images/';

    $scope.totalPrice = function (items) {
      const total = calcTotal(items);
      $scope.salesTax = total * $scope.salesTaxRate;
      return (total + $scope.salesTax).toFixed(2);
    };

    $scope.getSalesTax = function () {
      return {
        amount: $scope.salesTax.toFixed(2),
        rate: $scope.salesTaxRate * 100,
      };
    };

    $scope.removeItem = function (id) {
      $scope.cartItems = $scope.cartItems.filter((item) => item._id !== id);
    };

    $scope.itemsInCart = function () {
      return $scope.cartItems.length > 0 ? false : true;
    };

    $scope.validateCheckout = function () {
      const { cardNumber, expiryMonth, expiryYear, cvCode } = $scope.checkoutInfo;
      console.log('Scope: ', $scope.checkoutInfo);
      if (
        checkLength(cardNumber, 12, 19) &&
        checkLength(expiryMonth, 2, 2) &&
        checkLength(expiryYear, 4, 4) &&
        checkLength(cvCode, 3, 4)
      ) {
        return false;
      }
      return true;
    };

    $scope.checkoutInfo = {
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvCode: '',
    };
  },
]);

function calcTotal(itemsArr) {
  return itemsArr.reduce((acc, { price, qty }) => {
    typeof qty === 'number' || (qty = 0);
    return acc + +price * qty;
  }, 0);
}

function checkLength(item = '', min, max) {
  console.log('Checking');
  return item.length >= min && item.length <= max;
}
