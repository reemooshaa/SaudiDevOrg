// exercise: building a program to input employees information 
var employee= []; 
var role= [];
var experience=[];

for(var i=0; i<5; i++){
  employee[i]=window.prompt("The employee name");
  role[i]=window.prompt("The employee role: ");
  experience[i]=window.prompt("Year of experience: ");
}
for(var i=0; i<5; i++){
  console.log("name "+employee[i]+ 
                 "   Job role   " +role[i]+
                 "   experience   "+experience[i]);
}
// retrive the employees those have more than 3 years of experience. 
for(var i=0; i<5; i++){
	if(experience[i]> 3){
		console.log("name "+employee[i]+ 
                 "   Job role   " +role[i]+
                 "   experience   "+experience[i]);
}}
