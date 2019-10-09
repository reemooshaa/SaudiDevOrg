// ways to iterate over the array 
// first, using for loop
var names = ['Omar', 'Talal', 'Ahmed', 'Saad', 'Fahad'];
for (var i=0;i<names.length;i++){
  document.write(names[i]);
  document.write("<br>");
}
//second, using forEach
var apps = ['WhatsApp', 'Instagram', 'Facebook'];
apps.forEach(function(item){
  document.write(item);
  document.write("<br>");
});
