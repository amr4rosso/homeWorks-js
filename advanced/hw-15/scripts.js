"use strict";


//  task 1

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {
  data: [{ is_active: isActive }],
  meta: {
    paging: { total: totalPages },
  },
} = response;

console.log(isActive);
console.log(totalPages);

//   Task 2

const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

const { name, surname, ...parameters } = user;

console.log("name: ", name);
console.log("surname: ", surname);
console.log("parameters: ", parameters);

//   Task 3

const max = (...numberList) => {
  let maxNumber = 0;

  for (let number of numberList) {
    if (number > maxNumber) {
      maxNumber = number;
      number += number;
    }
  }

  return maxNumber;
};

// console.log(max(3, 6, 4));

//   Task 4

const createMessage = ({
  author = "Guest",
  text,
  receiver,
  time = new Date(),
}) => {
  return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString()})`;
};
const message = createMessage({ receiver: "John", text: "Hi!" });

// console.log(message);


//   Task 5

// 5.1

let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

const REGEXP = /[a-z]\d+[a-z]/gmi

const result = str.match(REGEXP);
console.log(result);

// 5.2


const form = document.getElementById("form");
const input = document.getElementById("input");

const DOMAINE_REGEXP = /^[a-zA-Z0-9][a-zA-Z0-9-.]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/gi;

const handleSubmit = (event) => {
  event.preventDefault();


  const { value } = input;

  if (DOMAINE_REGEXP.test(value)) {

    alert(`Domaine true!`);
  } else {
    alert("A wrong name domaine!");
  }

};

form.addEventListener("submit", handleSubmit);


// 5.2

const NUMBER_REGEXP = /\d{12,}/g

const str1 = "456786789533 gf5654567675 647653426453546687";

const res = str1.match(NUMBER_REGEXP);
console.log("res: ", res);