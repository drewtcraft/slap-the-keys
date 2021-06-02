// -------------------
// Arrays and Loops
// -------------------

// ---------------
// Intro to Arrays
// ---------------

// arrays are one of the most common collection types
// an array is an ordered list of values
// it looks like this:
let babysFirstArray = ['element one', 'element two', 3];
let emptyArray = []; // no values/elements

// here's a more real-world example (note that this could 
// also be written on one line and it would mean exactly 
// the same thing):
let marathonFinishOrder = [
	'usain holt', // first place!
	'meech fastbender', // silver
	'sprinter joe', // bronze, etc
];

// we can access a value in an array using its INDEX
// which is an integer that represents a value's position
// in the array (note: computers start counting at 0, 
// very annoying)
let clutteredData = ['moses', "get fuq'd", 'yajerk'];

clutteredData[0]; // 'moses'
clutteredData[1]; // "get fuq'd"
clutteredData[2]; // 'yajerk'

// we can also use this syntax to SET data in an array
clutteredData[0] = 'franklin beans';

// even if the index we supply is larger than the array
clutteredData[3] = 'ok';

// since arrays can hold many values, they also have a
// "length" property
clutteredData.length; // 4


// --------------
// Intro to Loops
// --------------

// a while-loop executes the code in its block while
// the provided condition is true
// this loop will count to 10 starting at 0
let counter = 0;
while (counter < 10) {
	console.log(counter);
	counter = counter + 1;
}

// the most common use for looping is to iterate 
// through an array
// this loop will log each value in the array

let randomArray = [1, 2, true, false, 'ok ok ok'];
let index = 0;
while (index < array.length) {
	let value = randomArray[index];
	console.log(value);
	// shorter: console.log(randomArray[index]);
}

// while loops are dangerous if the condition is always true
while (true) {
	console.log('this is an infinite loop!');
}

// a safer way to loop is the for-loop
// its syntax is unique, and must be memorized
// the below is equivalent to the while-loop on line 64
for (let i = 0; i < randomArray.length; i = i + 1) {
	console.log(randomArray[i]);
}

// syntax breakdown:
// let i = 0; -- create variable i with value 0
// i < randomArray.length; -- the condition (should we execute?)
// i = i + 1; -- what to do after the block is executed on each
// 		iteration

// -------
// SUMMARY
// -------

// here's some code using everything we've learned so far to get
// the highest and lowest, and average test scores

// 
let highestScore = 0;
let lowestScore = 100;
let total = 0;

let myScores = [100, 80, 75, 54];
for (let i = 0; i < myScores.length) {
	let score = myScores[i];
	if (score > highestScore) {
		highestScore = score;
	} else if (score < lowestScore) {
		lowestScore = score
	}

	total = total + score;
}

let average = total / myScores.length;
