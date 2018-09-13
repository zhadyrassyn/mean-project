var addSum = function(a, b, callbackSuccess, callbackError) {
  setTimeout(function() {
    //doing request to server
    if (typeof a === 'number' &&
      typeof b === 'number') {
      var sum = a + b;
      callbackSuccess(sum);
    } else {
      callbackError('error. a or b is not a number');
    }
  }, 2000);
};

addSum(2, '-', function(result) {
  console.log('result ', result);
},
  function(error) {
  console.log('error ', error);
  });