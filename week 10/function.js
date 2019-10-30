var o;
function printprops(o) {
for (var p=0; p<o;p++)
{
 document.write("p = " + p +"<br>");
}
}
printprops(5);

function distance(x1, y1, x2, y2) {
var dx = x2 - x1;
var dy = y2 - y1;
return Math.sqrt(dx*dx + dy*dy);
}
document.write(distance(2,4,6,8))
