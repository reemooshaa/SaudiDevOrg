// call the function with object and parameter 
var person = {
 fullName: function() {
 return this.firstName + " " + this.lastName;
 }
}
var person1 = {
 firstName:"John",
 lastName: "Doe"
}
var person2 = {
 firstName:"Mary",
 lastName: "Doe"
}
document.write(person.fullName.call(person1));

// call with arguments 
var person = {
 fullName: function(city, country) {
 return this.firstName + " " + this.lastName + "," + city + "," + country;
 }
}
var person1 = {
 firstName:"John",
 lastName: "Doe"
}
document.write(person.fullName.call(person1, "Oslo", "Norway"));
