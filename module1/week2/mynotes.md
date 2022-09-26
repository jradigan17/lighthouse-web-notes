## **Notes Week 2**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

In JavaScript, all values which are not Objects are collectively referred to as primitives
- Arrays & functions are sub categories of objects 

**The six types of primitives:**
- undefined
- null
- boolean
- string
- number
- symbol (Introduced in ES6 and not something we need to focus on right now)

**Objects:** 
- Contain key-value pairs; each key maps to a value
- Contain keys which are always strings (or symbols, but it's less common and not important right now)
- Have unique keys; the same key cannot appear twice in an object
- Have their keys point to values which can be of any type

- Objects are mutable. Primatives are not
  - In objects you can mutate properties, but when you re-assign, you are creating a different value/memory

An object constructor can be invoked with the word new

`typeof(new Boolean(true));`

---------------------------------------------------

## **Various commands**

`Object.keys(person)` - w/ console.log it lists the keys of object "person"

`for ... in` - to iterate through an object - note it iterates through keys when calling back. Limitation with prototypes

`fruitslist instanceof object` - will give true or false

`typeof fruitslist`- will give type (array will = object)

`this.name` - calls within the object it's in

```
for (var key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
    }

names.forEach((person, index) => {
  if (person === "Waldo") {
    found(index);   // execute callback
  }
});

```
**.filter**
```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
```

**.map**

```
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
```

**.reduce**
```
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
```
---------------------------------------------------

## **Tips**

**In line callback functions**
```
const findWaldo = function(names, found) {
  names.forEach((person, index) => {
    if (person === "Waldo") {
      found(index);   // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}!`);
});
```

BEFORE: anonymous callback as function expression 
```
[1,2,3].forEach(function (num) {
  console.log('num: ', num);
});
```
AFTER: anonymous callback as arrow function
```
[1,2,3].forEach((num) => {
  console.log('num: ', num);
});

[1,2,3].forEach(num => console.log('num: ', num));
```