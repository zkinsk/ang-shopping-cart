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

    $scope.generateConfirmationNumber = function(){
      const characters = generateCharacterRange(lowerCaseRange) + generateCharacterRange(numberRange)
      return generateKey(characters)
    }
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

function generateCharacterRange(rangeArray) {
    let string = '';
    for (let i = rangeArray[0]; i <= rangeArray[1]; i++) {
        string += String.fromCharCode(i);
    }
    return string;
}

const lowerCaseRange = [97, 122];
const numberRange = [48, 57];

function randomNum(upperRange) {
    return Math.floor(Math.random() * upperRange);
}

function generateKey(chars){
  let key = ""
  for (let i = 0; i < 12; i++){
    const index = randomNum(chars.length);
    key += chars[index]
  }
  return key
}

