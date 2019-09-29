// This is the part one of exercise.
// Crreat an function including the follwing parameters(subject, coordinator, no.hours) and use inheritance to assign values to it. 
function Teacher(Subject, CoordinatorName, NoofHours){
  this.Subject = Subject;
  this.CoordinatorName = CoordinatorName;
  this.NoofHours = NoofHours;
}
var Ahmed = new Teacher("History","Khaled",22);
var Ali = new Teacher("Math","Ahmed",20);
document.write(Ahmed.Subject+ " "+Ali.CoordinatorName);
