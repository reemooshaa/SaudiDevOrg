function Person(first, last, age, eye) {
 this.firstName = first;
 this.lastName = last;
 this.age = age;
 this.eyeColor = eye;
}
Person.prototype.nationality = "Saudi";
var myFather = new Person("Mohammed", "AlAli", 50, "Red");
document.write("The nationality of my father is " + myFather.nationality);
