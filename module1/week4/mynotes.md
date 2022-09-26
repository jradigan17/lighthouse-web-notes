## **Notes Week 4**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **Classes**

**superclass** - share code between classes when using inheritance - method overriding
- subclass & superclass
- When a subclass implements a method that already exists in the superclass, it is called method overriding
```
- bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
```

**getter & setter** - see lightcoin folder for example
```
 get price() {
  const basePrice = 10;
  const toppingPrice = 2;
  return basePrice + this.toppings.length * toppingPrice;
}

set size(size) {
  if (size === 's' || size === 'm' || size === 'l') {
    this._size = size;
  }
}
```

---------------------------------------------------

## **ES6 Property Value Shorthand**

Property value shorthands let you abbreviate the definition of a property in an object literal: If the name of the variable that specifies the property value is also the property key then you can omit the key.

```
const age = 33;

const person = {
  name: 'Pat',
  age
};

const obj = { x: 4, y: 1 };
const {x,y} = obj;
console.log(x); // 4
console.log(y); // 1
```
---------------------------------------------------

## **Module Exports**

`module.exports = xxx` - can exports just about anything: object, constant, function, value, etc. 
```
module.exports = { 
  firstName: "Lighthouse",
  lastName:  "Labs"
}

module.exports = function() {
  return "developers, developers, developers!"; 
}
```
---------------------------------------------------

## **Tips**

vs code wrap text - alt + z

template literals - `${variable}`

---------------------------------------------------

## **NPM**

username: jradigan
password: 
email: jradigan@hotmail.com
url: https://www.npmjs.com/

Lotide is here: https://www.npmjs.com/package/@jradigan/lotide

`npm login` - from command line in any directory

`npm publish --access public` - from root directory whic hyou would like to publish

How To : https://docs.npmjs.com/creating-and-publishing-scoped-public-packages#publishing-scoped-public-packages

---------------------------------------------------

## **User Input**
```
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');
// \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
```
---------------------------------------------------

## **Readline**
```
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
```
---------------------------------------------------

## **HTML Emmett**

`! + tab` - template will appear `.html` file

`<p>lorem</p>` will give you template text for sample text

Use live server extension in VS Code to run site in browser

---------------------------------------------------


## **Javascript Event Listeners**
```
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph')

button.addEventListener('click', (e) => {
  console.log(e.target.value);
  console.log(e.target)
  console.log(e)
  console.log('The button was clicked! ✅')

  paragraph.innerHTML = "The button was clicked!!!!"
})
```
see lecture notes [.js](./lecture1/4-events.js) & [.html](./lecture1/4-index.html) 

---------------------------------------------------
