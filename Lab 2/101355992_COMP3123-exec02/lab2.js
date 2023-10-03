//Exercise 1

const greeter = (myArray, counter) => {
    const greetText = 'Hello ';

    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2

const capitalize = (str) => {
    const [firstLetter, ...rest] = str;
    return `${firstLetter.toUpperCase()}${rest.join('')}`;
  };
  
  console.log(capitalize('fooBar'));
  console.log(capitalize('nodeJs'));

//Exercise 3

const capitalizeColors = (str) => {
    const [firstLetter, ...rest] = str;
    return `${firstLetter.toUpperCase()}${rest.join('')}`;
  };
  
  const colors = ['red', 'green', 'blue'];
  
  const capitalizedColors = colors.map((color) => capitalizeColors(color));
  
  console.log(capitalizedColors);

//Exercise 4

var values = [1, 60, 34, 30, 20, 5];

function filterLessThan20(value) {
  return value < 20;
}

var filteredValues = values.filter(filterLessThan20);

console.log(filteredValues);

//Exercise 5

var array = [1, 2, 3, 4];

function calculateSum(arr) {
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}

function calculateProduct(arr) {
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  }, 1);
}

var sum = calculateSum(array);
var product = calculateProduct(array);

console.log("Sum:", sum);
console.log("Product:", product);

//Exercise 6

class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model}, Year: ${this.year}`;
    }
  }
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);
      this.balance = balance;
    }
  
    info() {
      return `${this.details()}, Balance: $${this.balance}`;
    }
  }
  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());