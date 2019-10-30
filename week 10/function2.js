// use the function as a value
function myFunction(a, b) {
 return a * b;
}
var x = myFunction(4, 3);

// A function call itself 
(function s() {
 document.write("Hello! I called myself");
})();
