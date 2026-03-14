# javascript-test-0005-final-13260-yash
Final Project Assignment - This repository contains the complete final project code and documentation.


##   code Submission in the file named as javascript 005

let n = 5;
let currentNumber = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += currentNumber + " ";
        currentNumber++;
    }
    console.log(row);
}
