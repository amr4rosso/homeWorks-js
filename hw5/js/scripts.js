"use strict"


//##### Task 1



for (let i = 0; i < 10; i++) {
	console.log("Counter (i): ", i);
};


let y = 0;
while (y <= 10) {
	console.log('Counter (y): ', y);
	y++;
};


let k = 0;
do {
	console.log('Counter (k): ', k++);
} while (k <= 10);



for (let j = 20; j >= 10; j--) {
	console.log('Counter (j): ', j);
}

let x = 20;
while (x >= 10) {
	console.log('Counter (x): ', x);
	x--;
};

let d = 20;
do {
	console.log('Counter (d): ', d--);
} while (d >= 10);



//##### Task 2


const checkPrimeNumbers = (a, b) => {
  nextPrime:
  for (let i = a; i <= b; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);

  }
};

checkPrimeNumbers(2, 10);
checkPrimeNumbers(20, 100);



//##### Task 3


const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorize = () => {
  let userPassword;
  let userLogin;
  let isAuthSuccess = false;

	for (let i = 3; i > 0; i--) {

		userLogin = prompt("Логин:");
		if (!userLogin) {
		  alert("Введите логин");
		  continue;
		}
	
		userPassword = prompt("Пароль:");
		if (!userPassword) {
		  alert("Введите пароль");
		  continue;
		}
	
		if (userPassword === PASSWORD || userLogin === LOGIN) {
		  isAuthSuccess = true;
		  alert("Welcome");	
		  break;
		} else {
			alert(`Данные неверны! у вас осталось  ${i - 1} попитки` );
		}
	
	}

	if (isAuthSuccess == false) {
		alert("Ваш аккаунт зоблокировался! Пожалуйста попробуете еще раз через некоторое время.  ");	
	}
	

};

authorize();