var person = {
  FirstName:"Ahmed",
  LastName:"Saud",
  Age:33,
  Hight:190,
  FullName: function(){ 
  return this.FirstName+ " " +this.LastName;
}
};
document.write(person.FirstName+"<br>");
delete person.FirstName;
document.write(person.FirstName+"<br>");
