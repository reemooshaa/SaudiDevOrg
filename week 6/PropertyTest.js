var person = {
  FirstName:"Ahmed",
  LastName:"Saud",
  Age:33,
  Hight:190,
  FullName: function(){ 
  return this.FirstName+ " " +this.LastName;
}
};
document.write(person.hasOwnProperty("FirstName")); // using (hasOwnProperty) function to clarify the avilability of the property in an object.
