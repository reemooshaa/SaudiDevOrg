var person = {
  FirstName:"Ahmed",
  LastName:"Saud",
  Age:33,
  Hight:190,
  FullName: function(){ 
  return this.FirstName+ " " +this.LastName;
}
};
document.write(person.FullName());

var x = this;
document.write(x); // object window
