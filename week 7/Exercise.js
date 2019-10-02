// This exercise aims to create two arrays one for students and the other for their GPAs and then assign each student with her GPA
var GraduatedStudents =["Hebah","Reem","Renad","Hend"];// create student array 
var GPA = ["3.50","3.44","3.00","2.90"]; // create GPA array 
for (var n in GraduatedStudents){ // loop over arrays
  document.write("Student:"+ GraduatedStudents[n] +", GPA: "+ GPA[n]+ "<br>");
}
