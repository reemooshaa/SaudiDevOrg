var person = {
  FirstName:"Ahmed",
  LastName:"Saud",
  Age:33,
  Hight:190,
  status:"Single",
  get statGet(){
    return this.status;
  },
  set statSet(value){
    this.status = value;
  };
};
document.getElementById("demo").innerHTML=person.statGet;
