let number = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {
    result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}