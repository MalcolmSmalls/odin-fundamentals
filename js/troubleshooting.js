/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

//  function troubleshooting() {
// 	const a = 1;
// 	const b = 1;

// 	let result;

// 	// Edit between these lines
// 	// =================================
// 	result = a + b;

// 	// =================================

// 	return result;
// }


// const abTroubleshoot = require("./troubleshooting");

// const result = troubleshooting();


// if(result === 2) {
// 	console.log("Congrats! You got the correct answer");
// } else if(typeof result === 'number') {
// 	console.log(`You returned the number ${result}, the result should be the number 2`);
// } else {
// 	console.log(`You returned string "${result}", the result should be the number 2`);
// }

// result












/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */



//  function numberChecker() {
//     number = Number(prompt("enter a number"));
//      if(number >= 10) {
//          alert(true);
//      } else {
//          alert(false);
//      }
//  }

//  numberChecker()


 /**
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you. 
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 * 
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */

// const a = 1+8
// const b = 22*3
// const c = 5%4
// const d = a - 17
// const e = a + b + c + d

// console.log(`a = ${a}
// b = ${b}
// c = ${c}
// d = ${d}
// e = ${e}`)



// 	testGroup: "b",
// 	greeting,
// 	birthYear,
// 	thisYear,
// 	firstName,
// 	lastName,
// 	fullName,
// 	age
// }


// const birthYear = 1990;
// const thisYear = 2022;
// const firstName = 'Malcolm';
// const lastName = 'Smalls';
// const fullName = `${firstName} ${lastName}`
// const age = thisYear - birthYear
// const greeting = `Hello, my name is ${fullName} and I am ${age} years old.`

// console.log(greeting)



const add7 = num => num+7

console.log(add7(0))

function multiply(num1,num2){
	return num1 * num2
}

console.log(multiply(2,2))

const capitalize = str => {
	let firstLetter = str.substring(0,1).toUpperCase()
	let restStr = str.substring(1).toLowerCase()
	return firstLetter+restStr
}

console.log(capitalize('WHIP'))

const lastLetter = str => str.slice(-1)

console.log(lastLetter('dog'))

