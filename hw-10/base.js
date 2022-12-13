const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
  { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
  { id: 3, author: "Оруел", name: "1984", isReading: false },
  { id: 4, author: "Swaroop", name: "a byte of python", isReading: false },

];

console.log('books: ', books);


function library() {
  let action = prompt(`Choose your action: \n take\n return\n add\n search`);

  if (action === null) {
    alert("Thinks come again in library!");

    return;
  }

  action = action.toLowerCase().trim();

  switch (action) {
    case "take":
      takeBook();
      break;
    case "return":
      returnBook();
      break;
    case "add":
      addBook();
      break;
    case "search":
      searchBook();
      break;  
    default:
      alert("No action!");
  }
};


function takeBook() {

  const listOfBooksNames = books.filter(book => book.isReading === false)
                                .map(book =>  `- ${book.name}`)
                                .join("\n"); 
    
  let desiredBookName = prompt(`Enter name of book to take! \n ${listOfBooksNames}`);  

  desiredBookName - desiredBookName.toLowerCase().trim();

  if (!desiredBookName){
    alert("Ho book name!");

    return;
  };

  let desiredBook = books.find(book => {
    return book.name.toLowerCase() === desiredBookName;
  });

  if(!desiredBook) {
    alert("No book with this name!");

    return;
  };

  if (desiredBook.isReading) {
    alert('This book is reading by someone else!');

    return;
  };

  desiredBook.isReading = true;

  alert(`Thinks your book "${desiredBook.name}" with index: ${desiredBook.id}`);

  console.log("books: ", books);

};


function returnBook() {

  const returningBookId = Number(prompt("Enter id token book:"));

  if (!returningBookId) {
    alert('No id book!!');
    return;
  };

  const currentBook = books.find(book => book.id === returningBookId);

  if (!currentBook) {
    alert("Invalid book id.");
    return;
  };

  if (!currentBook.isReading) {
    alert("this book are not reading now.");
    return;
  };

  currentBook.isReading = false;
  alert(`Thanks, come again! Do you like "${currentBook.name}"?`);

};


const addBook = () => {

  const name = prompt("Enter book name:");
  const author = prompt("Enter book Author:");

  if (!name || !author) {
    alert("you don't enter name's or author's book!");
    return;
  };

  const newBook = {
    name,
    author,
    isReading: false,
    id: generateBookId(),
  };

  let cloneNewBook = books.find(book => {
    return book.name.toLowerCase() === newBook.name.toLowerCase();
  });

  if (!cloneNewBook) {
      books.push(newBook);
      alert(`Book was added! Library id: ${newBook.id}`);
  }else {
    alert(`this book already exist in library!`)
  }


  console.log(`newBook`, newBook);
  console.log(`Books`, books);
  // books.push(newBook);

  // alert(`Book was added! Library id: ${newBook.id}`);
};


function generateBookId () {
  let isBookWithIdExists = true;
  let generatedId;

  do {
    generatedId = Math.ceil(Math.random() * 1000);
    isBookWithIdExists = Boolean(books.find((book) => book.id === generatedId));
  } while (isBookWithIdExists);

  return generatedId;
};


function searchBook() {

  let authorBookName = prompt(`Enter writer's name:`);

  authorBookName = authorBookName.toLowerCase().trim();

  if (!authorBookName) {
    alert("You don't enter any author!");
    return;
  };

  let booksWrittenByAuthor = books.filter(book => book.author.toLowerCase() === authorBookName)
      .map(book => `- ${book.name}`)
      .join("\n");

  if (!booksWrittenByAuthor) {
    alert(`In library no books writes by "${authorBookName}"!`);
    return;
  }else {
    alert(`this books written by author ${authorBookName}:\n${booksWrittenByAuthor}`);
    return;
  };

};





















