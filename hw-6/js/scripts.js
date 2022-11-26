"use strict"



// ### Task 1



const makeFirstLetterCapital = (str) => {
	
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1).toLowerCase();
		
};


const userRegistration = () => {
	let userName;
	let userSurname; 
	let userPassword;
	let isAuthSuccess = false;


	do {

		userName = prompt("Enter your Name:");
		if (!userName || userName.length < 1) {
			alert("Your name must be more than 1 symbol");
		  	continue;
		}

		userSurname = prompt("Enter your Surname:");
		if (!userSurname || userSurname.length < 1) {
			alert("Your surname must be more than 1 symbol");
		  	continue;
		}

		userPassword = prompt("Enter your Password:");
		if (!userPassword || userPassword.length < 6 ) {
			alert("Your password must be more than 6 symbol");
		  	continue;
		}

		if (userName && userSurname && userPassword) {
			isAuthSuccess = true;
			break;
		}


	} while (!isAuthSuccess);

	alert(`Welcome ${makeFirstLetterCapital(userName)} ${makeFirstLetterCapital(userSurname)}`);

};

// userRegistration();





// ### Task 2



const randomInteger = (firstNumber, secondNumber) => {
	let randInteger = firstNumber + Math.random() * (secondNumber + 1 - firstNumber);
	return Math.floor(randInteger);
}

// alert(randomInteger(20, 50));
// alert(randomInteger(2, 10));