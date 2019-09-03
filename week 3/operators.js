var num1 =30; num2 =20; 
if(num1>num2){ // check whether number 1 greater than the second
  document.write(num1+ " Is greater than "+ num2);
} if (num1==num2){ // check if they are equals 
  document.write("equals");
}if (num1>10 && num2<30){ // check by using greater than and less than 
  document.write("<br>Number are between 10 and 30");
}
var calculateAvg =(num1+num2)/2;
average =(calculateAvg>40)?"Too much":"Normal"; // use the Ternary Operator instead of normal IF ELSE
document.write("<br>"+average);
