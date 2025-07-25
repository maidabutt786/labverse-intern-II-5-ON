let maida={
    name: "maida",
    sayhi: function(){
        alert("hi buddy!");
    }
};
maida.sayhi();

let Str="hello";
alert( Str.toUpperCase() );

let n=8.9765;
alert(n.toFixed(2));

alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}

//converting string to number
let num1 = Number("123");

//alert(null.test);

let str1 = "Hello";

str1.test = 5;

alert(str1.test);

let billion = 1000000000; // 1e9
let Billion = 1_000_000_000;

alert( 7.3e9 ); 

let mсs = 0.000001; // 1e-6
// -3 divides by 1 with 3 zeroes
//1e-3 === 1 / 1000; // 0.001

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

//num.toString(base)
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
alert( 123456..toString(36) ); // 2n9c
//Two dots to call a method directly on a number

alert( 1e500 ); // Infinity
alert( 0.1 + 0.2 == 0.3 ); // false
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"

alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false

alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

let A = +prompt("The first number?", "");
let B = +prompt("The second number?", "");

alert( A + B );

alert( 6.35.toFixed(1) ); // 6.3
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

alert(`1 + 2 = ${sum1(1, 2)}.`); // 1 + 2 = 3. //backticks

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // a list of guests, multiple lines

let guesTList = "Guests:\n * John\n * Pete\n * Mary";
alert(guesTList); // a multiline list of guests, same as above

alert( 'I\'m the Walrus!' ); // I'm the Walrus!  // all special characters start with a backslash character \

let strr = `Hello`;

// the first character
alert( strr[0] ); // H
alert( strr.at(0) ); // H

// the last character
alert( strr[str.length - 1] ); // o
alert( strr.at(-1) );

for(let char of 'hello') {
  alert(char); // h, e, l, l, o
}

alert( 'Interface'[0].toLowerCase() ); // 'i'
