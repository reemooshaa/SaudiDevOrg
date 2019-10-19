// map used to generate a new array by using the main one. 
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
document.write(x);

// filter used to take a part of the array and generate a new array form it. 
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) {
  return x < 3 });
everyother = a.filter(function(x,i) {
  return i%2==0 });
console.log(smallvalues);
console.log(everyother);

// some&every
// returns boolean results. 
// every will returns True if all conditions are true 
a = [1,2,3,4,5];
y= a.every(function(x) { return x < 10; })
z= a.every(function(x) { return x % 2 === 0; })
console.log(y);
console.log(z);

// some will return True if at least one is true 
a = [1,2,3,4,5];
y= a.some(function(x) { return x < 10; })
z= a.some(function(x) { return x % 2 === 0; })
console.log(y);
console.log(z);

// reduce& reduceRight
// it takes two parameter one is the sum of the array and the other is the current element in the array. 
// reduce is from left to right and reduceRight is from right to left 
var numbers = [175, 50, 25];
var leftToRight = numbers.reduce(function(total, num) {return total - num;});
var RighToLeft = numbers.reduceRight(function(total, num) {return total - num;});
console.log(leftToRight);
console.log(RighToLeft);

// indexOf & lastIndexOf
// it used for searching in the array 
// indexOf to search for the first element in the arrat to last, and lastIndexOf used to search form the last element to the first 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
var b = fruits.lastIndexOf("Mango");
document.write(a);
document.write("<br>");
document.write(b);
