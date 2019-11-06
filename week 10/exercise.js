// Function that sums two numbers
const summation = function (a, b) {
  return a + b;
}
//  `memoize` function  decides if it has to return cached value or call the summation function
const memoize = function (fnToMemoize) {
  const memoizedCache = {}                // A closeure Object
  return function(...args) {
    const propToCheck = constructPropertyFromArgs(fnToMemoize, args);
    if (!memoizedCache[propToCheck]) {
      memoizedCache[propToCheck] = fnToMemoize(...args);
    } else  {
      console.log('From Cache ');
    }
    return memoizedCache[propToCheck];
  }
}
// To create a Property name from the arguments passed to the function
const constructPropertyFromArgs = function (fnToMemoize, args) {
  let propToCheck = [];
  propToCheck = propToCheck.concat(fnToMemoize.name, args);
  return propToCheck.join('|'); // A delimiter to join args
}
const memSummation = memoize(summation, 2);  // `memoize` is a HOC

console.log(memSummation(10, 50));
console.log(memSummation(10, 50));
