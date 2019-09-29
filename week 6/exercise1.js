// This is the part one of exercise.
// Crreat an object including the follwing elements(subject, coordinator, no.hours) and use getter and setter to assign values to it. 
var Teachers = {
  subject:"",
  CoordinatorName:"",
  NoofHours:"",
  get subGet(){
    return this.subject;
  },
  set subSet(value){
    this.subject=value;
  },
    get coorGet(){
    return this.CoordinatorName;
  },
  set coorbSet(value){
    this.CoordinatorName=value;
  },
  get hoursGet(){
    return this.NoofHours;
  },
  set hoursSet(value){
    this.NoofHours=value;
  }
  
};
Teachers.subject = "History";
Teachers.CoordinatorName="Ali";
Teachers.NoofHours=20;

document.write(Teachers.subject,Teachers.CoordinatorName,Teachers.NoofHours)
