## **Notes**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

### **Reference Code from another file**

*Must be in same directory*

Every File In Node Is A Module

`module.exports = sayHelloTo;` - current file

`const sayHelloTo = require('./myModule');` or `exports.isGroupValid = function(array)...` - reference file

Library - collection of code 

Package - npm various codes and files. Generally has a package.json

{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Short project summary",
  "main": "index.js",
  "scripts": {
    "myscript": "ENV=development node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.13.4"
  }
}

- The dependencies section of package.json lists the packages that need to be installed for the project to run properly. In the above example it lists a package called express, and the value ^4.13.4 specifies the version.

BDD or Behavior Driven Development

Object Orientation, commonly abbreviated "OO"

Object Oriented Programming, or "OOP"

`assert.equal(math.sum([1, 2, 3]), 6)`

---------------------------------------------------

## **Various commands**

When doing NPM install first `npm init -y` (-y saves entry strokes), then `npm install ....`, then `npm test`

Mocha & Chai install `npm install mocha chai --save-dev`

`npm run...` to run different scripts example `npm run test` or `npm run test_sum.js`

`nvm list`, `nvm version`, `nvm use 16.15.1`

---------------------------------------------------

## **Tips**

Classes - Always start with capital

To create a new object from a class, we use the new keyword:

`let pizza1 = new Pizza();`

pizza1 and pizza2 are pizza objects. When you create an object using a class, it is an instance of that class. So pizza1 and pizza2 are instances of the Pizza class.

`pizza1 === pizza2; // false`

class Pizza {

  constructor() {
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

class SomeClass {
  methodName(parameters) {
    // this is a method
  }
}

class SomeClass {
  someMethod() {
    this.hello = "hi"; // Created a property called hello
  }
}

constructor is a special kind of method that gets executed when an object instance is created from a class. Everything inside the Pizza's constructor method will get run for the new instance of the class when we call new Pizza();. This is a great place to setup default state for new instances. In other words, the constructor is for setting default values for any new object's properties.

class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

const greeting = "Hello, world!" 
const objGreeting = new String("Hello, world!");

greeting == objGreeting; 
// => true

greeting === objGreeting; 
// => false
We see above that despite having the same string content, the primitive string is not the exact same as an object string. However, using == allows JS to convert one of them so that their types match. To avoid these kinds of issues, it's generally considered bad practice to use object constructors when you're creating primitives, but object constructors are extremely useful for instantiating the complex objects that you'll be defining with your classes in the future.


class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}
Student and Mentor are subclasses of the Person class, since they are extensions of that class. Person is the superclass in this relationship.

Recursion - always needs a base case & a recursive case 
