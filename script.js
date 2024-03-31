//Table-----------------------------
var num = prompt("Enter number");
for( var i = 1 ; i <= 10 ; i++) {
    document.write(num+"x" +i+ "=" + (num*i) + "<br>")
}
 var num = Math.floor(Math.random()*10);
 document.write(num);



//factorial-------------------
var inputNum = prompt("please enter and integer");
inputNum=parseInt(inputNum);
var total = 1;
for(i = inputNum; i > 1; i--){
 total *= i;
}
console.log(total);






let binaryInput = prompt("Enter a binary number:");
let decimal = 0;
let power = 0;

for (let i = binaryInput.length - 1; i >= 0; i--) {
    let digit = parseInt(binaryInput[i]);
    
    decimal += digit * Math.pow(2, power);
    
    power++;
}

document.write("Decimal equivalent:", decimal);



let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let smallest = Math.min(num1, num2, num3);
let gcd = 1;

for (let i = 2; i <= smallest; i++) {
    if (num1 % i === 0 && num2 % i === 0 && num3 % i === 0) {
        gcd = i;
    }
}

document.write("The greatest common divisor of ", num1 + ", ", num2 + ", and ", num3 + " is: ", gcd);



let num4 = parseInt(prompt("Enter the first number:"));
let num5 = parseInt(prompt("Enter the second number:"));
let num6 = parseInt(prompt("Enter the third number:"));

let maxNumber = Math.max(num4, num5, num6);
let lcm = maxNumber;

while (true) {
    if (lcm % num4 === 0 && lcm % num5 === 0 && lcm % num6 === 0) {
        document.write("The least common multiple of ", num4 + ", ", num5 + ", and ", num6 + " is: ", lcm);
        break;
    }
    lcm += maxNumber;
}


let greatestNumber = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < 10; i++) {
    let input = parseInt(prompt("Enter a number:"));
    if (!isNaN(input)) {
        if (input > greatestNumber) {
            greatestNumber = input;
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; // Decrement i to ensure 10 iterations are completed
    }
}

document.write("The greatest number among the inputs is: ", greatestNumber);



let smallestNumber = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 10; i++) {
    let input = parseInt(prompt("Enter a number:"));
    if (!isNaN(input)) {
        if (input < smallestNumber) {
            smallestNumber = input;
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; // Decrement i to ensure 10 iterations are completed
    }
}

document.write("The smallest number among the inputs is: ", smallestNumber);



let temperatures = [
    { celsius: 60, unit: '°C' },
    { fahrenheit: 45, unit: '°F' }
];

for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i];
    if (temp.celsius !== undefined) {
        let fahrenheit = (temp.celsius * 9 / 5) + 32;
      document.write(temp.celsius + '°C is ' + fahrenheit.toFixed(2) + ' °F, ');
    } else if (temp.fahrenheit !== undefined) {
        let celsius = (temp.fahrenheit - 32) * 5 / 9;
        document.write(temp.fahrenheit + '°F is ' + celsius.toFixed(2) + ' °C');
    }
}




let num7 = parseInt(prompt("Enter the first number:"));
let num8 = parseInt(prompt("Enter the second number:"));

let sum = num7 + num8;

if (num7 === num8) {
    sum *= 3;
}

document.write("The result is: ", sum);




let num9 = parseInt(prompt("Enter the first number:"));
let num10 = parseInt(prompt("Enter the second number:"));

let found = false;

if ((num9 > 0 && num10 < 0) || (num9 < 0 && num10 > 0)) {
    found = true;
}

if (found) {
    document.write("One number is positive and the other is negative.");
} else {
    document.write("Both numbers are either positive or negative.");
}


