
// Task 1



const products = [
	{
	  name: "Iphone 12",
	  brand: "Apple",
	  price: 3200000,
	  properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
	},
	{
	  name: "Galaxy S20 Ultra",
	  brand: "Samsung",
	  price: 2900000,
	  properties: ["120 hz screen", "Water resistance"],
	},
	{
	  name: "MI 9",
	  brand: "Xiaomi",
	  price: 1300000,
	  properties: ["Best price", "Pay less - get more!"],
	},
  ];



// const cardsOfProducts = (arr) => {

// 	const allProducts = document.createElement("div")

// 	arr.forEach((product) => {
// 		const nameProduct = document.createElement('h2');
// 		nameProduct.innerText = product.name;

// 		const brandProduct = document.createElement('h3');
// 		brandProduct.innerText = product.brand;

// 		const propertiesProduct = document.createElement('ul');
// 		product.properties.forEach((item) => {
// 			const listItem = document.createElement('li');
// 			listItem.innerText = item

// 			propertiesProduct.append(listItem);
// 		});

// 		allProducts.append(nameProduct, brandProduct, propertiesProduct);
// 	});

// 	return allProducts;

// };



const cardsOfProducts = (arr) => {

	const allProducts = document.createElement("div");

	arr.forEach((product) => {

		const cardProduct = document.createElement('div');

		cardProduct.innerHTML = `
		<h2>${product.name}</h2>
		<h3>${product.brand}</h3>
		<ul>
		${product.properties.map((item) => `<li>${item}</li>`).join("")}
		</ul>
		`
		return allProducts.append(cardProduct);
	})

	return allProducts;

};

const prod = cardsOfProducts(products);

document.body.append(prod);

