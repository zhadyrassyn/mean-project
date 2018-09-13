var add = function(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof a === 'number' &&
          typeof b === 'number') {
        var sum = a + b;
        resolve(sum);
      } else {
        reject('a or b is not a number');
      }
    }, 2000);
  });
};

add(2, '3').then(function(result) {
  console.log('result ', result);
}, function(error) {
  console.log('error ', error);
});