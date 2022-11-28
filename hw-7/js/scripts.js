"use strict";



// ### Task 1



function makeTimeTable () {

	const tasks = {};
	let myTask;
	let timeTask;
	
	while (true) {

		tasks[timeTask = prompt("Time of task?")] = myTask = prompt("Enter your task? ");

		if ((myTask === null || myTask === '') && (timeTask === null || timeTask === '' )) {
		
			break;
		}

	}
	

	console.log("tasks :", tasks);

};

makeTimeTable();



// ### Task 2



const salaries = {
	John: "4300.00",
	Ann: "5700.40",
	Pete: "4900.95",
};

let sum = 0;

const sumSalaries = (obj) => {
	
	for (let key in obj) {
		
		sum += Number(obj[key]) ;	
	}

	console.log(`Sum of values is : ${sum.toFixed(2)}`);
};

console.log(sumSalaries(salaries));








