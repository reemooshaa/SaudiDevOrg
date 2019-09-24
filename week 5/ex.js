var num1 =1; 
var num2 =0; 
try{
  if(num2 == 0){
    throw("can't divide by zero");
  }else{
    var division = num1/num2;
  }
} catch (w){
  alert("Error: " + w);
}
finally {
  alert("Good")
}
