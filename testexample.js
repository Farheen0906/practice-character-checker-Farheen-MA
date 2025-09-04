
const red = "\x1b[31m";
const reset = "\x1b[0m";
let displayMessage = `Receipt:
Book \t Price
${red}1984${reset}\t ${red}$9.99${reset} 
$Dune \t ${red}$14.99${reset} 
Total \t ${red}$24.98${reset}`;
console.log(displayMessage);

let display="Receipt:\nBook\tPrice\n1984\t$9.99\nDune\t$14.99\nTotal\t$24.98";
console.log(display);
