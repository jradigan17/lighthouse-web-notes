## **Notes Week 1**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

Comand Line Arguments:
`$ [runtime] [script_name] [argument-1 argument-2 argument-3 ... argument-n]`

runtime = node, java, sh, etc.

`!Number.isNaN(convertedElement) && (sumOfNumbers += convertedElement)` - short circuting first condition true, second condition will be performed 

---------------------------------------------------

## **Prompt Code**
```
{
  "dependencies": {
    "prompt-sync": "^4.1.5"
  }
}
```
let prompt = require("prompt-sync")();

let input = prompt("What would you like to be the start and end number (seperated with a space)? ");

---------------------------------------------------

## **Various commands**

`npm install -g eslint` eslint

`Number()` - takes a string to a number

`parseInt()` takes a string to an integer

`console.log('the # is ${number}');` - will print the number variable

`process.argv[]` - takes the inputs from the command line that was inputed in the terminal

`.join("")` - join arrays

console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`); - colour green

console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`); - colour red

`repeat('*', 3)` - function

`return original.split('').reverse().join('');`

`isNaN(x)` or `Number.isNaN(x)` [true if given value is NaN and type is Number] - can't use NaN === Nan or NaN == NaN - falsy 

`Array.isArray(x)` or `isArray(x)`

`${min(flightPrices)}`

`const generateNumber = function(min, max) {`
  `randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;`
  
`console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});`



---------------------------------------------------

## **Tips**

Try experimenting with the comparison operators (`<`, `>`, `===`, etc.) in the node REPL, which you can launch using the `node` command in Vagrant.

Work on your code iteratively – that means in small pieces. 

To help you figure out how to use `hungry` and `availableTime` inside your function, try outputting their values to the Terminal as follows.

