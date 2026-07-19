//Convert the string "123" to a number and add 7
 let str = "123";
let num = Number(str);
num += 7
console.log(num);

//Check if the given variable is falsy and return "Invalid" if it is
function test (value = 1 ) {
if (!value) {
    return"invalid"
} else {
    return "valid"
}
}
console.log(test());


//Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

let arr=[1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < arr.length; i++) { 
 if (i%2 == 0) {
    continue;
 }
    console.log(i);
  }

   

   //Create an array of numbers and return only the even numbers using filter method
   let arr1 = [1,6,8,9,4,3,2];
let evenNum = arr1.filter(arr1=> arr1 % 2 == 0) ;
console.log(evenNum);

//Use the spread operator to merge two arrays, then return the merged array
let x = [3,4,6];
let y = [8,3,9]
let z= [...x,...y]
console.log(z);

//Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday)
let day=6;
switch (day) {
   case 1:
        console.log("sunday");
        break;
     case 2 : 
     console.log("monday");
     break;
     case 3:
        console.log("tuesday");
         break;
         case 4:
        console.log("wednesday");
         break;
        case 5:
    console.log("thursday");
        break;
        case 6:
        console.log("friday");
        break;
        case 7:
        console.log("saturday");
        break;
        default:
            console.log("invalid day");
}

//Create an array of strings and return their lengths using map method
let a = ["dft","abcd","ff","eeeee"]
let l= a.map( a=> a.length)
console.log(l);

//Write a function that checks if a number is divisible by 3 and 5
 function check () {
    let num1 = 60
    if (num1 % 3 == 0 && num1 % 5 == 0) {
        return"Divisible by both";
         }
         else{
           return " not divisible"
         }
    }

console.log(check());

//Write a function using arrow syntax to return the square of a number
 let square =  ( number1 = 10) => {
    return number1*number1
};  
let result  = square();
console.log(result);

//Write a function that destructures an object to extract values and returns a formatted string
const person = {name: "tia", dreamJob:"pilot"};

function info({ name, dreamJob }) {
    return ` Her name is ${name} she want to be ${dreamJob} `;
}

console.log(info(person));

    //Write a function that accepts multiple parameters (two or more) and returns their sum
function sum(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log(sum(1, 20 , 30 , 20 ,8));

//Write a function that returns a promise which resolves after 3 seconds with a 'Success' message

function successPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        } ,3000) ;
    })
}

successPromise().then(result => console.log(result));

//Write a function to find the largest number in an array
function largest(arr) {
    return Math.max(...arr);
}

console.log(largest([1, 20, 7, 2, 9]))

//Write a function that takes an object and returns an array containing only its keys
function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({ name: "tia", dreamJob:"pilot" }));

//Write a function that splits a string into an array of words based on spaces
function splitWords(text) {
    return text.split(" ");
}

console.log(splitWords("The sun is shining today "));