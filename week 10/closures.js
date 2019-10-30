var counter = 0; // global 
document.write(counter);

function add() {
 counter += 1; // local
}
add();
add();
add();
document.write(counter);
