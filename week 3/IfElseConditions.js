var FirstColor="green"; SecondColor="black";
if (FirstColor.length == SecondColor.length){ // check the length for both variables 
  document.write("Both colors have the same  length");
  if(FirstColor.charAt(0) ==  SecondColor.charAt(0)){ // check the first letters for both variables 
    document.write("The first letters in both colors are the same");
  }
  else if(FirstColor ==  SecondColor){
    document.write("Colors are equals");
  }
  else {
  document.write("<br>The first letters in both colors are not the same and not equals");
  }
}
