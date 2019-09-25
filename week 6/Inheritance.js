function user(id, FirstName, LastName){
 this.id = id;
 this.FirstName = FirstName;
 this.LastName = LastName;
}
var Ahmed = new user(1001, "Ahmed", "Saud");
var Khaled = new user(1002, "Khaled", "Hamed");
document.write(Ahmed.id+" "+Ahmed.FirstName+" "+Ahmed.LastName);
