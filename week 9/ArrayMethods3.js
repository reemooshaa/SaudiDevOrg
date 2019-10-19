 var fruits = ["Banana", "Orange", "Apple", "Mango"] ;
 // convert all of array elements to string
 fruits.toString ();
 
 // forEach 
 // its syntax 
 // array.forEach(function(currentValue, index, arr), thisValue)
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
return sum += item;
}
document.write(sum);
