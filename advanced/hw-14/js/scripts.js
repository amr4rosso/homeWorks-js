"use strict";


const formConfig = [
	{
	  element: "text",
	  name: "login",
	  label: "Логин",
	},
	{
	  element: "text",
	  name: "age",
	  label: "Возраст",
	},
	{
	  element: "select",
	  name: "language",
	  label: "Выберите язык программирования",
	  options: [
		{
		  text: "JavaScript",
		  value: "js",
		},
		{
		  text: "Java",
		  value: "java",
		},
		{
		  text: "Python",
		  value: "python",
		},
	  ],
	},
  ];

function makeForm(array) {

	const form = document.createElement('form');
	const button = document.createElement('button')

	array.forEach((item) => {

		if (item.element == 'text') {
			let divInput = document.createElement('div');
			divInput.classList.toggle("input-container");

			  divInput.innerHTML = `
						<label for="${item.name}">${item.label}</label>
						<input class="input" type="${item.element}" name="${item.name}" id="${item.name}" />
						`
			form.append(divInput);
		}
		if (item.element == 'select') {
			let divInput = document.createElement('div');
			  divInput.innerHTML = `
						<label class="input-label" for="${item.name}">${item.label}</label>
						<select class="select" name="${item.name}" id="${item.name}" >
							${item.options.map((option) => `<option>${option.text}</option>`)}
						</select>
						`
			form.append(divInput);
		}

	})

	button.setAttribute('type', "submit");
	button.setAttribute("id", "submit");
	button.innerText = "Подтвердить";
	button.classList.toggle("button");
	form.append(button);
	
	form.setAttribute("id", "form")
	form.setAttribute("class", "form")


	document.body.append(form);
	
};

makeForm(formConfig);

let formFromFunction = document.getElementById("form");

const convertFormDataToObject = (formData) => {
	const formValues = {}
  
	for (let pair of formData.entries()) {

	  formValues[pair[0]] = pair[1] 
  
	}
  
	return formValues
};

const handleSubmit = (event) => {
	event.preventDefault();
	
	const formData = new FormData(event.target);

	const preparedData = convertFormDataToObject(formData);

	console.log(`preparedData`,preparedData);
};

form.addEventListener('submit', handleSubmit);




 