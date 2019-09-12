var number=1; 
while(number>0){
  document.write(number);
  number++
  if(number==9){
    break;// break used here to go out of the loop
  }else
    continue; // continue used to cut the current iteration
}
