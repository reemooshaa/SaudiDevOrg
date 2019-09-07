// given this switch code and asked to transfare it to if else code
/*
switch (browser) {
 case 'Edge':
 alert( "You've got the Edge!" );
 break;
 
 case 'Chrome':
 case 'Firefox':
 case 'Safari':
 case 'Opera':
 alert( 'Okay we support these browsers too' );
 break;
 
 default:
 alert( 'We hope that this page looks ok!' );
}
*/

var browser = "Chrome";
if(browser=="Edge"){
  alert("You have got the Edge");
}
if (browser=="Chrome"||broweser=="Firfox"||broweser=="Safari"||broweser=="Opera"){
  alert("OK, We support these browsers too");
}
else{
  aler("We hope that this page looks ok!")
}
