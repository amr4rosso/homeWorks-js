"use strict";



// TODO  #### Task 1



const getAmountTrueInArray = (arr) => {

	let result = 0;

	for (let element of arr) {

		if (element == true) {
			result += 1;
		}
	  
	}
	
	console.log('Number of True in array: ', result);
	
};

getAmountTrueInArray([true, false, false, 10, true]);
getAmountTrueInArray([true, false, true, false, "true", false, true, true]);
getAmountTrueInArray([false, false, false, false]);
getAmountTrueInArray([]);



// TODO  ####  Task 2



const alphabet = ['a', 'b', 'c', 'b', 'a','b', 'a'];

const fruits = [  "apples", "oranges", "pears", "pears", "apples", "oranges", "oranges", "pears",];

const getDuplicateElement = (arr) => {
	 
	let obj = {};

	for (let i = 0; i < arr.length; i++) {

		if (obj[arr[i]]) {

			obj[arr[i]] += 1;

		} else {

			obj[arr[i]] = 1;

		}

	}

	console.log(obj);

}; 

getDuplicateElement(alphabet);
getDuplicateElement(fruits);



// TODO  #### Task 3



const getStrangerNumber = (array) => {

	let count = 0;
	let N;

	if (array.length < 3) {

		console.log('Array length must be more than 3 elements!');

	} else {

		for (let number of array) {

			if (number % 2 == 0){
				count +=1;
			}else {
				N = number;
			}

			if (number % 2 !== 0) {
				count += 1;
			}else {
				N = number;
			}
		}
	}

	console.log("Number N =", N);
}

getStrangerNumber([0, 1]);
getStrangerNumber([2, 6, 8, 10, 3]);
getStrangerNumber([3, 7, 9, 6]);