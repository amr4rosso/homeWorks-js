"use strict"



// ### Task 1



const makeFirstLetterCapital = (str) => {
	
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1).toLowerCase();
		
};

const userRegistrationName = () => {

	let userName;

	do {
		userName = prompt('Введите вашу имя:');

		if (!userName) {
			alert('Введите хотя бы один срочний синвол! ');
		} else {
			break;
		}

	} while(true);

	const upperCaseName = makeFirstLetterCapital(userName);

	return upperCaseName;
};


const userRegistrationSurname = () => {

	let userSurname;

	do {
		userSurname = prompt('Введите вашу фамилию:');

		if (!userSurname) {
			alert('Введите хотя бы один срочний синвол! ');
		} else {
			break;
		}

	} while(true);

	const upperCaseSurname = makeFirstLetterCapital(userSurname);

	return upperCaseSurname;
};


const userRegistrationPassword = () => {

	let userPassword;

	do {

		userPassword = prompt('Придумайте пароль (не менее чем 6 символов и садержащий синволы разного регистра):');

		if (!userPassword || userPassword < 6) {
			alert('Введите не менее 6 синволов!');
		} else if (!isNaN(userPassword) || userPassword.toLocaleLowerCase() === userPassword || (userPassword.toLocaleUpperCase() === userPassword)) {
			alert('НЕ корректный пароль!');
		} else {
			alert('Регистрация прошда успешно.');
			break;
		}


	} while(true)

	return userPassword;

};

const restName = userRegistrationName();
const restSurname = userRegistrationSurname();
const restPassword = userRegistrationPassword()

alert(`вы зарегистрированны под имени: ${restName} ${restSurname} Ваш пароль: ${restPassword}`);


// const userRegistration = () => {
// 	let userName;
// 	let userSurname; 
// 	let userPassword;
// 	let isAuthSuccess = false;


// 	do {

// 		userName = prompt("Enter your Name:");
// 		if (!userName || userName.length < 1) {
// 			alert("Your name must be more than 1 symbol");
// 		  	continue;
// 		}

// 		userSurname = prompt("Enter your Surname:");
// 		if (!userSurname || userSurname.length < 1) {
// 			alert("Your surname must be more than 1 symbol");
// 		  	continue;
// 		}

// 		userPassword = prompt("Enter your Password:");
// 		if (!userPassword || userPassword.length < 6 ) {
// 			alert("Your password must be more than 6 symbol");
// 		  	continue;
// 		}

// 		if (userName && userSurname && userPassword) {
// 			isAuthSuccess = true;
// 			break;
// 		}


// 	} while (!isAuthSuccess);

// 	alert(`Welcome ${makeFirstLetterCapital(userName)} ${makeFirstLetterCapital(userSurname)}`);

// };

// userRegistration();





// ### Task 2



const randomInteger = (firstNumber, secondNumber) => {
	let randInteger = firstNumber + Math.random() * (secondNumber + 1 - firstNumber);
	return Math.floor(randInteger);
}

// alert(randomInteger(20, 50));
// alert(randomInteger(2, 10));