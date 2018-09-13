var addSum = function(a, b, callback) {
  setTimeout(function() {
    //doing request to server
    var sum = a + b;
    callback(sum);
  }, 2000);
};

addSum(2, 3, function(result) {
  console.log('result ', result);
});