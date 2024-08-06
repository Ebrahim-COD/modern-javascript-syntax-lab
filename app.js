console.log('--------------------------------------------EXCERCISE 1------------------------------------------------');
// Exercise 1: Applying Array.prototype.map()

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const numsMultiplyByTwo = nums.map(num => num * 2);
console.log(numsMultiplyByTwo);

console.log('--------------------------------------------EXCERCISE 2------------------------------------------------');

// Exercise 2: Array destructuring

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping, secondTopping);
// or 
console.log(pizzaToppings[0], pizzaToppings[1]);

console.log('--------------------------------------------EXCERCISE 3------------------------------------------------');

// Exercise 3: Object destructuring
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
const { make, model } = car;
console.log(make, model);
//or
console.log(car.make, car.model);

console.log('--------------------------------------------EXCERCISE 4------------------------------------------------');

//Exercise 4: Applying the spread operator on arrays

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const PizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...PizzaToppings];
console.log(controversialPizzaToppings);


console.log('--------------------------------------------EXCERCISE 5------------------------------------------------');

//Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

const Car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
const myCar = { ...Car };

myCar.model = 'q7';
console.log(Car);
console.log(myCar);

console.log('--------------------------------------------EXCERCISE 6------------------------------------------------');

//Exercise 6: Using the rest parameter

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const userProfile = {
    username: 'JAX',
    age: 9000,
    email: 'leagueoflegends@league.com',
}

const propertyName = 'email';
console.log(userProfile[propertyName]);

console.log('--------------------------------------------EXCERCISE 7------------------------------------------------');

//Exercise 7: Import and Export

console.log("DONE in the other files")


console.log('--------------------------------------------EXCERCISE 8------------------------------------------------');

//Exercise 8: Default parameters

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

const CatsDogsSentence = (noun = 'cat', adjective = 'white') => {
    console.log(`The ${noun} is ${adjective}.`);
  }

CatsDogsSentence();
CatsDogsSentence('dog');
CatsDogsSentence('dog' , 'blue');
CatsDogsSentence(undefined, undefined);


console.log('--------------------------------------------EXCERCISE 9------------------------------------------------');

//Exercise 9: Ternary operator

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

let taste = pizza === 'tasty' ? 'yum' : 'yuck';

console.log(taste);

console.log('--------------------------------------------EXCERCISE 10------------------------------------------------');


//Exercise 10: Boolean gates

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const LANG = localLangConfig || 'English';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default


const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

console.log('--------------------------------------------EXCERCISE 11------------------------------------------------');

//Exercise 11: Optional chaining

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age;
  
  console.log(cat);