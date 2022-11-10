"use strict"


// ### 1

const a = 5;
const b = 10;


// Addition Operator (+)

console.log("5 + 10 = ", a + b);

// Subtraction Operator (-)

console.log("5 - 10 = ", a - b);

// Multiplication Operator (*)

console.log("5 * 10 = ", a * b);

// Division Operator (/)

console.log("5 / 10 = ", a / b);


// ### 2

true && true        //true
false || true       //true
true && 'false'     //true
0 && 1 || ' ' && 42     //true  
null == undefined       //true
'' == 0     //true
1 === '1'       //false
NaN === NaN && true     //false
true || false && true || false      //true
(true || false) && (true || false)      // true
10 || 0 && 'dog' || ''      //true  
(10 || 0) && ('dog' || '')      //true  



// ### 3

const myFirstNumber = Number(prompt("enter your first number!"));
const mySecondNumber = Number(prompt("enter your second number!"));

if (myFirstNumber == mySecondNumber) {
    alert("yours numbers equal");
} else if (myFirstNumber > mySecondNumber){
    alert("your first number more than second number");
}else {
    alert("your first number less than second number ");
}


// ### 4

const firstNumber = Number(prompt("enter your first number!"));
const secondNumber = Number(prompt("enter your second number!"));

const actions = prompt("Choose your operators (+), (-), (*) or (/) ");

switch (actions) {
    case '+' :
        alert(firstNumber + secondNumber );
        break;
    case '-' :
        alert(firstNumber - secondNumber ); 
        break;
    case '*' :
        alert(firstNumber * secondNumber );
        break;
    case '/' :
        alert(firstNumber / secondNumber ); 
        break; 
    default:
        alert("T don't know this operator!!!");             
}




// #### 5

const yourAge = Number(prompt("Сколько вам лет?"));

if (yourAge < 12 || yourAge > 80){
    if (yourAge < 12){
        alert('детям вход запрещен!');
    }else {
        alert('очень пожилым людям вход запрещен');
    }
}else if ((12 <= yourAge) && (yourAge <= 18) || (60 <= yourAge) && (yourAge <= 80)) {
        let permissions = confirm('У вас есть разрешении от взрослых? если ДА нажмите ОК, если нет нажмите Cancel ');
        if (permissions) {
            alert("вход разрешен!");
        }else {
            alert("вход запрешен!");
        }
} else {
    alert("вход разрешен!");
}