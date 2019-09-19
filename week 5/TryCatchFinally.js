var num;
function EvenNumber(num) {
 if (num%2 == 0) return x;
 else throw "The number must not be odd";
}
try {
 var num1 = Number(prompt("Please enter a positive integer", ""));
 EvenNumber(num1);
alert(num1 + " is even");
} catch (y) {
 alert(y);
}
finally{
 alert("Finally, I got it");
}
