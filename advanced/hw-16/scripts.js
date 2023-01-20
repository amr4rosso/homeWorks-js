

const VISITS_COUNT_KEY = 'visits';

const renderGreeting = (isInitial, visitCount = 0) => {
	const greeting = document.createElement("h1");
	const counterLogin = document.createElement("h3");

	greeting.innerText = `Добро пожаловать`;
	counterLogin.innerText = `Вы заходили раз: ${visitCount}`;

	document.body.append(greeting);

	if (isInitial) {
		document.body.append(counterLogin);
	}
}

if (localStorage.getItem(VISITS_COUNT_KEY)) {
	const visits = JSON.parse(localStorage.getItem("visits"))
	const updatedVisits = visits + 1;
	localStorage.setItem("visits", updatedVisits);

	renderGreeting(true, updatedVisits);
} else {
	localStorage.setItem('visits', 1);
	renderGreeting(false);
}
