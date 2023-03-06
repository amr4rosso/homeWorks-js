"use strict";


// ------------ Task 19-2 ------------


const BASE_URL = 'https://ipapi.co/json/';
const BASE_URL_FLAG = 'https://restcountries.com/v2/name';
const preloader = document.getElementById('preloader');

const container = document.getElementById('container');

const showPreloader = (show) => {
	if(show) {
		preloader.style.display = 'block';
	} else {
		preloader.style.display = 'none'
	}
}

const renderFlag = (flag) => {

	let div = document.createElement('div')

	let imgFlag = document.createElement('img')
	imgFlag.setAttribute('src', flag)
	imgFlag.classList.add('flag-container')

	div.append(imgFlag)
	container.append(div)

	return div
}

const getCountryFlag = async (place, url) => {

	let {country_name: country} = place;

	try{
		let response = await fetch(`${url}/${country}`)
		console.log(response);
		if(response.status === 200) {
			let flag = await response.json();
			let flagSrc = renderFlag(flag[0].flag)

			showCountry(place, flagSrc);
		}else {
			throw new Error(`An error occurred\nerror code: ${response.status}`)
		}
	}catch (error) {
		let errText = error.message
		alert(errText)
	}
}

const showCountry = ({country_name: country, country_capital: capital, currency}, flag) => {

	let card = document.createElement('div');
	// card.classList.add('card')

	let countryText = document.createElement('h1')
	countryText.innerText = country
	// countryText.classList.add('country-text')

	let capitalText = document.createElement('h2')
	capitalText.innerText = capital
	// capitalText.classList.add('capital-text')

	let currencyText = document.createElement('p')
	currencyText.innerText = currency
	currencyText.classList.add('currency-text')

	showPreloader(false)
	card.append(countryText, capitalText, currencyText, flag)
	container.append(card)

}

const getUserIpAddress = async (url) => {

	showPreloader(true);

	try{
		let response = await fetch(url)
		if (response.status === 200) {
			let place = await response.json();
			getCountryFlag(place, BASE_URL_FLAG)
		} else {
			throw new Error(`An error occurred\nerror code: ${response.status}`)
		}
	}catch (error) {
		let errText = error.message
		alert(errText)
	}
}

getUserIpAddress(BASE_URL)


// ---------- Task 19-2 ---------

const BASE_URL_PEOPLE = "https://swapi.dev/api/people";
const headers = { "Content-Type": "application/json" };

const form = document.getElementById("form");
const container_actor = document.getElementById("container_actor");
const title = document.createElement("h2");
const btnFilms = document.createElement("button");

const handleRequestErrors = async (response) => {
  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error);
  }

  return response;
};

const getActor = async (id) => {
  try {
    const response = await handleRequestErrors(
      await fetch(`${BASE_URL_PEOPLE}/${id}`, {
        method: "GET",
        headers,
      })
    );

    const actorInfo = await response.json();

    const actorName = actorInfo.name;
    const actorFilms = actorInfo.films;
    return {
      actorName,
      actorFilms,
    };
  } catch (error) {
    console.log(error.message);
  }
};

const renderActor = (actorName) => {
  title.innerText = actorName;
  btnFilms.innerText = "Films";

  title.classList.add("name-user");
  btnFilms.classList.add("button__form");

  container_actor.append(title, btnFilms);
};

const renderFilms = ({results: films}) => {
	const listFilms = films.map((film) => {
		const titleFilm = document.createElement('p');
		titleFilm.innerText = film.title

		titleFilm.classList.add('title-film')

		container_actor.append(titleFilm);
	})
}

const getAllFilms = async (actorFilms) => {
  const requests = actorFilms.map((url) => fetch(url));
  const responses = await Promise.all(requests);
  const jsonResponses = responses.map((resp) => resp.json());
  const result = await Promise.all(jsonResponses);

  renderFilms({ results: result });

};

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const actorId = Number(input.value);

  if (actorId > 0 && actorId < 82) {
	const actor = await getActor(actorId);
	const actorName = actor.actorName;
	const actorFilms = actor.actorFilms;
  
	renderActor(actorName);
  
	btnFilms.addEventListener("click", async () => {
	  const films = await getAllFilms(actorFilms);
	});
  } else {
	alert(`Not actor with this id! please try again`);
  }

};

form.addEventListener("submit", handleSubmitForm);
