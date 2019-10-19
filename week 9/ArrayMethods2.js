var fruits = ["Banana", "Orange", "Apple", "Mango"] ;

// splice used to modify on the origin array and add elements to it. 
 document.write(fruits.splice(1, 2, "Lemon", "Kiwi")) 
 
 //push, to add elements to the array 
 fruits.push("Kiwi");

// pop to delete the last element in the array 
fruits.pop();

// unshift to add elements to the first indexes to the array. 
fruits.unshift("Lemon", "Pineapple");

// shift to delete the first element in the array. 
fruits.shift();
