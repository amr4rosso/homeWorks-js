"use strict";


//TODO  ------------ Homework 9----------



//?   Задание 1

//?  1.1


let arr = [1, 2, -10, -2, 7];
console.log(arr);

function getBooleanArray(array) {
	
	let arr = array.map((number) => number > 0 )
	return arr;
};

console.log('boolean array : ', getBooleanArray(arr))


//?  1.2


const users = [
	{
	  name: 'Sam',
	  role: 'admin',
	  age: 25,
	},
	  {
	  name: 'Peter',
	  role: 'admin',
	  age: 16,
	},
	  {
	  name: 'Pablo',
	  role: 'admin',
	  age: 32,
	},
	  {
	  name: 'Enrico',
	  role: 'client',
	  age: 43,
	},
	  {
	  name: 'Mary',
	  role: 'client',
	  age: 34,
	},
	  {
	  name: 'Katerine',
	  role: 'guest',
	  age: 17,
	},
]

console.log('users : ', users);

const getAdultAdmins = (array) => {

	let adults = array.filter((item) => item.role == 'admin' && item.age > 18)
					.map((names) => names.name)
					
	return adults;
}

console.log("adults admins : ", getAdultAdmins(users));


//?  1.3


const numbers = [1, 10, 17, 24, 45];
console.log('numbers : ', numbers)

const getAverageNumber = (array) => {

	let sumElement = array.reduce((acc, value) => {
		acc += value;
		return acc ;
	}, 0);

	return sumElement / array.length;

};

console.log("average number : ", getAverageNumber(numbers));


//?   Задание 2


const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};


let list = [1, 3, 2];
let listNumber = [-6, 8, 4, -3, 9, -5];

console.log('list : ', list);
console.log('listNumber : ', listNumber)



function ownMap (array, callback) {

	let resultArray = [];

	for ( let index = 0; index < array.length; index++) {
		resultArray[index] = callback(array[index], index, array);
	}

	return resultArray;

};


console.log("incrementList : ", ownMap(list, increment));

function ownForEach (array, callback) {

	let resultArray = [];

	for ( let index = 0; index < array.length; index++) {
		resultArray[index] = callback(array[index], index, array);
	}

};

ownForEach(listNumber, logger);



function ownFilter (array, callback) {

	let resultArray = [];

	for ( let index = 0; index < array.length; index++) {
		// resultArray[index] = callback(array[index], index, array);
		if (callback(array[index])) {
			resultArray.push(array[index]);
		} 
	}

	return resultArray;

};

let negativeNumberList = ownFilter(listNumber, isNegative);

console.log('negative list numbers : ', negativeNumberList);



