var person = {
  FirstName:"Ahmed",
  LastName:"Saud",
  Age:33,
  Hight:190,
  FullName: function(){ // create a method inside the object 
  return this.FirstName+ " " +this.LastName;
}
};
document.write(person.FullName()); //calling the method 
