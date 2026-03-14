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
