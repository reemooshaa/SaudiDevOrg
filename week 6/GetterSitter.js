 firstName: "Ali",
 lastName: "Ahmed",
 language: "EN",
 get langGet(){
 set langSet(value) {
 this.language = value; }
};
// Set a property using setter
person. langSet = "AR";
// Display data from the object using getter
document.getElementById("demo").innerHTML = person. langGet;
