// the exercise aims to create a for loop and inside it have two (while)s. and use one with the break and the other with continue 
var initial=1;
for(initial; initial<8;initial++){
  while(initial<4){
    initial++;
    document.write("The number is "+initial);
    continue;
  }
  while(initial>=4){
    initial++;
    document.write("The number is "+initial);
    break;
  }
}
