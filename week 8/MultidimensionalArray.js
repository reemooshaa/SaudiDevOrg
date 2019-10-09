// creating mutlidiminstional array. 
var activities = [
 ['Working', 7],
 ['Eating', 6],
 ['Walking', 4],
 ['Playing Game', 8],
 ['Sleeping', 9] ]
// the follwing way is to ceate and print out the multi dimensional array 
// Create one dimensional array 
 var numbers = new Array(2);  
document.write("Creating 2D array <br>"); 
// Loop to create 2D array using 1D array 
for (var i = 0; i < numbers.length; i++) { 
    numbers[i] = new Array(2); 
}  
var h = 0; 
// Loop to initilize 2D array elements. 
for (var i = 0; i < 2; i++) { 
    for (var j = 0; j < 2; j++) { 
        numbers[i][j] = h++; 
    } 
}   
// Loop to display the elements of 2D array.  
for (var i = 0; i < 2; i++) { 
    for (var j = 0; j < 2; j++)    { 
        document.write(numbers[i][j] + " "); 
    } 
    document.write("<br>"); 
}  
