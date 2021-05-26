// -------------------
// Intro to Javascript
// -------------------

// --------
// Comments
// --------

// Comments come in two flavors:
// Single line comments like this one (begin with //)

/*
	And 
	MULTILINE 
	comments, start with /* 
	and end with the reverse
*/

// -------
// Logging
// -------

// this is JavaScript's built in logging function:
console.log('anything between the parenthesis will be logged');
console.log(5); // log numbers
console.log(5, 6, 7, 'what'); // log more than one thing on the same line


// ---------
// Variables
// ---------

// For now, we should declare our variables with the keyword: "let"
let thisIsTheVariableName = 'this is the variable value';

// Variables defined with "let" are able to have their value changed, 
// or reassigned
thisIsTheVariableName = 999;


// ----------
// Data Types
// ----------

// The primitive data types are string, number, boolean, undefined, and null
let stringEx = 'this is a string';
stringEx = "you can also use double quotes";
stringEx = `you can also use back ticks`;

let numberEx = 100; // whole numbers are of type number
numberEx = 0.000005; // as are decimals

let booleanEx = true; // boolean values are either true or...
booleanEx = false; // ...false

let undefinedEx; // undefined means "there is no value here"
undefinedEx = undefined; // we can set undefined explicitly

let nullEx = null; // null means the same as undefined


// ---------
// Operators
// ---------

// Operators come in a few varieties; we'll look at unary and binary
// We'll start with binary operators.

// Arithmetic operations are pretty straightforward:
1 + 1; // add
2 - 1; // subtract
2 * 2; // multiply
4 / 2; // divide
5 % 2; // modulo (remainder) -- this line evaluates to 1

// Comparative operators compare, and return a boolean value
4 > 3.99; // greater-than -- evaluates to true
4 < 3.99; // less-than -- evaluates to false

4 === 4; // equality -- evaluates to true
4 === 3; // evaluates to false

4 !== 3; // does not equal -- evaluates to true
4 !== 4; // evaluates to false

4 >= 4; // greate-than-or-equal-to -- evaluates to true
4 <= 4; // less-than-or-equal-to -- evaluates to true

// Logical operators also return a boolean value
true && true; // true
true && false; // false
false && true; // false
false && false; // false

true || true; // true
true || false; // true
false || true; // true
false || false; // false

// We'll look at two unary operators, typeof and !
// typeof tells us the type of a something
typeof 'this is a new string'; // evaluates to 'string'
typeof stringEx; // also 'string'

typeof 5; // evaluates to 'number'
typeof numberEx // also 'number'

typeof true; // evaluates to 'boolean'
typeof booleanEx; // also 'boolean'

typeof undefined; // evaluates to 'undefined' -- yes, it is its own type
typeof undefinedEx; // also 'undefined'

typeof null; // evaluates to 'null' -- also its own type
typeof nullEx; // also 'null'

// the ! operator (a.k.a. negation) changes the truth-value of something
!false; // evaluates to true
!true; // evaluates to false


// ------------
// Control Flow
// ------------

// if-statements can be used for conditional execution
// Between the parenthesis should be a true, false, truthy, or falsey value
// IF the value is true/truthy, the code in the accompanying block will execute

// 2 DOES equal 1 + 1...
if (2 === (1 + 1)) {
	// ...so any code inside of these curly brackets will execute
}

// We can also tell our program what to do if our condition is not met
// using else
let mysteryNumber = 102030405060708;
if (mysterNumber === 0) {
	// executes if mysteryNumber is 0
} else {
	// executes if mysteryNumber is NOT 0
}

// We can also chain conditions using if-else
if (mysterNumber === 0) {
	// executes if mysteryNumber is 0
} else if (mysterNumber === 1) {
	// executes if mysteryNumber is 1
} else {
	// executes if mysteryNumber is neither 0 nor 1
}


// ---------------
// Truthy / Falsey
// ---------------

// Some values are considered "truthy", some "falsey"
// There isn't a nice rule for this, something you just need to memorize

// Some falsey values
''; // empty string
0;
null; 
undefined;

// Some truthy values
'this string is not empty'; 
'n'; // neither is this one
1; // positive number
-1000; // negative number
