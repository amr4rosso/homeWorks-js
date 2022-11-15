"use strict";


//### Task 1


function isEqualNumbers(a, b) {
    if (!a || !b || typeof a !== "number" || typeof b !== "number") {
        console.log("Something is wrong!");
    } else if (a == b) {
        console.log('Numbers is equal: ' + 'True' );
    } else {
        console.log('Numbers is equal: ' + 'False' );
    }
};

isEqualNumbers(5, "d");
isEqualNumbers(7, 9);
isEqualNumbers("five", 5);



//### Task 2


function getSum (a, b) {
    if (!a || !b || typeof a !== "number" || typeof b !== "number") {
        console.log("The options must be a numbers!");
    } else {
        console.log(a + b);
    }  
};

getSum(3, 6);
getSum(7, 2);
getSum(5, "hello"); 


// const getSum = (a, b) => a + b;

// const result1 = getSum(4, 8);

// console.log("result1 = " + result1);
// console.log("result = " + getSum(2, 5));
// console.log("result = " + getSum(32, 8));



//### Task 3



function getExponentiation (a, b = 2) {
    if (!a || !b || typeof a !== "number" || typeof b !== "number") {
        console.log("One or two of the options not a number!");
    } else {
        console.log("Exponentiation = " + a ** b);
    }
};

getExponentiation(2, 3);
getExponentiation(5);
getExponentiation(3);
getExponentiation(6, "s");



//### Task 4



function isDayOfWeek (a) {
    switch (a) {
        case 1 :
            console.log("Day of the week is " + "Monday");
            break;
        case 2 : 
            console.log("Day of the week is " + "Tuesday");
            break;
        case 3 :
            console.log("Day of the week is " + "Wednesday");
            break;
        case 4 :
            console.log("Day of the week is " + "Thursday");
            break;        
        case 5 :
            console.log("Day of the week is " + "Friday");
            break;    
        case 6 :
            console.log("Day of the week is " + "Saturday");
            break;    
        case 7 :
            console.log("Day of the week is " + "Sunday");
            break;    
        default:
            console.log("Not such a day!");    
    }
};

isDayOfWeek(3);
isDayOfWeek(7);
isDayOfWeek(9);
isDayOfWeek(2);



//### Task 5



function inputYourNameAndAge () {
    const userName = prompt("Как вас зовут?");
    const userAge = prompt("Сколько вам лет?");

    if (userAge >= 30) {
        alert("Здавствуйте, " + userName);
    } else {
        alert("Привет, " + userName);
    }
};

inputYourNameAndAge();

