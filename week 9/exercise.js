// given two arrays, finde wehre and what the different exists. 
var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];
for (var i=0; i<second.length; i++){
  if(first[i]-second[i]==0){
    continue; 
  }
  else{
    var diff = first[i]-second[i]; 
    document.write("the index number "+i+ "is differnce by "+diff)
  }
}
