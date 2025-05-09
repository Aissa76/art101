 /*
 * index.js - purpose and description here
 * Author: Aissa Ben-Mimoun
 * Date: may 8
 *license public Domain
 */

// Constants
let chicken = [1, 2, 3, 4, 5];
let soup = ['a', 'b', 'c', 'd', 'e'];
let word = "Valarie";

// Functions
function squareNumber(x) {
  return x * x;
}

function main() {
  console.log("Main function started.");

  console.log(squareNumber(5));

  let chickenSquared = chicken.map(squareNumber);
  console.log("Chicken squared:", chickenSquared);

  let anonSquared = chicken.map(function(x) {
    return x * x;
  });
  console.log("Anonymous function results:", anonSquared);

  console.log("Word:", word);
}

main();
