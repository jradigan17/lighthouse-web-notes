## **Notes Week 8**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **Transparent Textures**

https://www.transparenttextures.com/

---------------------------------------------------

## **Various CSS & HTML**

Global CSS Selector (Asterisk*)   
`* {box-sizing: border-box}`

Browser Reset - All browsers to have same defaults
- Needs to be first in your style sheet listing in head - reads one after another   
https://meyerweb.com/eric/tools/css/reset/

`div*4`
* will add 4 div's open and close tags

`ctrl + D` - multiple select cursor

script tag in head will run before body
* if script needs body read - add to bottom of body or defer in the head

---------------------------------------------------

## **HTML Entities**

For items like '<' or '>' or copyright in HTML need to use HTML entities (ex. &lt) 

---------------------------------------------------

## **Box Model**

https://codepen.io/psande/pen/nKOJyX

Interactive Box Model - Demo

`border-box`    
`content-box`

---------------------------------------------------

## **Flexbox - CSS Styling**

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

justify-content [justify-items justify-self]:
* flex-start: Items align to the left side of the container.
* flex-end: Items align to the right side of the container.
* center: Items align at the center of the container.
* space-between: Items display with equal spacing between them.
* space-around: Items display with equal spacing around them.
* space-evenly: 

align-items:
* flex-start: Items align to the top of the container.
* flex-end: Items align to the bottom of the container.
* center: Items align at the vertical center of the container.
* baseline: Items display at the baseline of the container.
* stretch: Items are stretched to fit the container.

flex-direction:
* row: Items are placed the same as the text direction.
* row-reverse: Items are placed opposite to the text direction.
* column: Items are placed top to bottom.
* column-reverse: Items are placed bottom to top

**Notice that when you set the direction to a reversed row or column, start and end are also reversed.**

order:
* By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2)

align-self:
* Another property you can apply to individual items is align-self. This property accepts the same values as align-items and its value for the specific item.

flex-wrap:
* nowrap: Every item is fit to a single line.
* wrap: Items wrap around to additional lines.
* wrap-reverse: Items wrap around to additional lines in reverse.

flex-flow:
* The two properties flex-direction and flex-wrap are used so often together that the shorthand property flex-flow was created to combine them. This shorthand property accepts the value of the two properties separated by a space.

align-content:
* flex-start: Lines are packed at the top of the container.
* flex-end: Lines are packed at the bottom of the container.
* center: Lines are packed at the vertical center of the container.
* space-between: Lines display with equal spacing between them.
* space-around: Lines display with equal spacing around them.
* stretch: Lines are stretched to fit the container.

flex-grow:
* .flex-item.nth-of-type(1){  flex-grow: 1;}
* .flex-item.nth-of-type(2) {  flex-grow: 2;}
* flex-grow takes effect only when there is remaining space in the flex container. The flex-grow property of a flex item specifies how much an item will expand relative to the other items in order to fill the flex box. Default is 1. When set to 0, the item will not grow to fill remaining space at all. In this example, the ratio of two items is 1:2, meaning the first item will take up ⅓, while the second item will take ⅔ of the remaining space.

flex-shrink:
* .flex-item:nth-of-type(1) {  flex-shrink: 1;}
* .flex-item:nth-of-type(2) {  flex-shrink: 2;}
* flex-shrink only takes effect when the flex items overflow the flex container because of insufficient space. It specifies how much an item will shrink relative to the other items in order for the items to not overflow the flex box. Default is 1. When set to 0, the flex item will not shrink at all. In this example, the ratio is 1:2, meaning the first item will shrink by ⅓, while the second item will shrink by ⅔ of the overflowed space.

flex-basis:
* .flex-item.nth-of-type(1) {  flex-basis: 200px;}
* .flex-item.nth-of-type(2) {  flex-basis: 10%;}
* Instead of using the initial size of an element, you can customize its size with flex-basis. By default, its value is flex-basis: auto, which means the size calculated from non-Flexbox CSS rules. You can also set it to some absolute value or a value that represents a percentage of the flex container; for example flex-basis: 200px and flex-basis: 10%.

flex:
* .flex-item:nth-of-type(1) {  flex: 1 0 100px;}
* .flex-item:nth-of-type(2) {  flex: 2 0 10%;}
* flex is a shorthand for flex-grow, flex-shrink and flex-basis. In this example, the first flex item is set to be flex-grow=1, flex-shrink=0, flex-basis=100pxand the second flex item is set to be flex-grow=2, flex-shrink=0, flex-basis=10%. In this case , since there is remaining space in the flex container, only flex-grow takes effects and flew-shrink is ignored.

---------------------------------------------------

## **Grid Layout - CSS Styling**

grid-column-start:
* specifies grid item's start position

grid-gap: 3px;

grid-column-end:
* When grid-column-start is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the grid-column-end property.
* go one further than needed
* can be combined to go backwards as well (start: 5, end: 2)
* If you want to count grid lines from the right instead of the left, you can give grid-column-start and grid-column-end negative values. For example, you can set it to -1 to specify the first grid line from the right.
* Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the span keyword. Keep in mind that span only works with positive values.

grid-column:
* grid-column: 2 / 4;
* grid-column: 2/span 3

grid-row-start: 
* One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. grid-row-start works much like grid-column-start except along the vertical axis.
* grid-column: 2/spa; - will completely span the remainder

grid-area:
* If typing out both grid-column and grid-row is too much for you, there's yet another shorthand for that. grid-area accepts four values separated by slashes: grid-row-start, grid-column-start, grid-row-end, followed by grid-column-end.

If grid items aren't explicitly placed with grid-area, grid-column, grid-row, etc., they are automatically placed according to their order in the source code. We can override this using the order property, which is one of the advantages of grid over table-based layout.

Specifying a bunch of columns with identical widths can get tedious. Luckily there's a repeat function to help with that.

For example, we previously defined five 20% columns with the rule grid-template-columns: 20% 20% 20% 20% 20%;. This can be simplified as grid-template-columns: repeat(5, 20%) or repeat(6, 1fr);

Fractional
* Grid also introduces a new unit, the fractional fr. Each fr unit allocates one share of the available space. For example, if two elements are set to 1fr and 3fr respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space. 

grid-template:
* grid-template is a shorthand property that combines grid-template-rows and grid-template-columns.
* grid-template: repeat(2, 50px) / repeat(3, 1fr) [rows / columns]

* repeat(auto-fit, 100px) [can use auto-fill too]
* auto-fill will create gap if no more content present
* repeat(auto-fit, minmax(100px, 1fr))

* grid-auto-rows: 100px; - implicit rows
* grid-column: auto / span 2; === span 2

* grid-auto-flow: dense; [attempts to fill holes in grid]

---------------------------------------------------

## **Display Values**

* block
* inline
* none
  * This is different from visibility. Setting display to none will render the page as though the element does not exist. visibility: hidden; will hide the element, but the element will still take up the space it would if it was fully visible.
* visibility

https://developer.mozilla.org/en-US/docs/Web/CSS/display

```
.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```
```
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```
---------------------------------------------------

## **Position Values**

* relative
* fixed
* static
* absolute

---------------------------------------------------

## **Block vs. Inline Elements**
```
Block elements include:

* headings (<h1>, <h2>, <h3>,<h4>,<h5>,<h6>)
* div (<div>)
* section (<section>)
* footer (<footer>)
* article (<article>)
* paragraph (<p>)
* lists (<ul>, <ol>)
* nav (<nav>)

Inline elements include:

* anchor (<a>)
* em (<em>)
* strong (<strong>)
* span (<span>)
```
---------------------------------------------------

## **Float**

* wrap text around image
* float: right
```
.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}
```
```
.clearfix {
  overflow: auto;
  zoom: 1;
}
```
```
@media (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}
@media (max-width:599px) {
  nav li {
    display: inline;
  }
}
```
```
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```
---------------------------------------------------
```
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas: 
        ". h h h h h h h h h h ."
        "m c c c c c c c c c c c"
        ". f f f f f f f f f f .";
}

.header {
    grid-area: h;
}

.menu {
    grid-area: m;
}

.content {
    grid-area: c;
}

.footer {
    grid-area: f;
}
```
---------------------------------------------------
```
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: dense;
}

.horizontal {
    grid-column: span 2;
}

.vertical {
    grid-row: span 2;
}

.big {
    grid-column: span 2;
    grid-row: span 2;
}
```
---------------------------------------------------
```
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
    grid-template-rows: [main-start] 40px [content-start] auto [content-end] 40px [main-end]; 
}

.header {
    grid-column: main;
}

.menu {}

.content {
    grid-area: content;
}

.footer {
    grid-column: main;
}
```
---------------------------------------------------
```
article {
    display: grid;
    grid-template-columns: 80px 1fr 80px;
}

article > * {
    grid-column: 2;
    min-width: 0;
}

article > figure {
    grid-column: 1 / -1;
    margin: 20px 0;
}
```
---------------------------------------------------

## **CSS - Cascading Style Sheets**
```
/* comments appear inside slash-asterisk, just like this line!
   there are no "one-line comments"; this is the only comment style */

/* ####################
   ## SELECTORS
   #################### */

/* the selector is used to target an element on a page. */
selector { property: value; /* more properties...*/ }

/*
Here is an example element:

<div class='class1 class2' id='anID' attr='value' otherAttr='en-us foo bar' />
*/

/* You can target it using one of its CSS classes */
.class1 { }

/* or both classes! */
.class1.class2 { }

/* or its name */
div { }

/* or its id */
#anID { }

/* or using the fact that it has an attribute! */
[attr] { font-size:smaller; }

/* or that the attribute has a specific value */
[attr='value'] { font-size:smaller; }

/* starts with a value (CSS 3) */
[attr^='val'] { font-size:smaller; }

/* or ends with a value (CSS 3) */
[attr$='ue'] { font-size:smaller; }

/* or contains a value in a space-separated list */
[otherAttr~='foo'] { }
[otherAttr~='bar'] { }

/* or contains a value in a dash-separated list, e.g., "-" (U+002D) */
[otherAttr|='en'] { font-size:smaller; }


/* You can combine different selectors to create a more focused selector. Don't
   put spaces between them. */
div.some-class[attr$='ue'] { }

/* You can select an element which is a child of another element */
div.some-parent > .class-name { }

/* or a descendant of another element. Children are the direct descendants of
   their parent element, only one level down the tree. Descendants can be any
   level down the tree. */
div.some-parent .class-name { }

/* Warning: the same selector without a space has another meaning.
   Can you guess what? */
div.some-parent.class-name { }

/* You may also select an element based on its adjacent sibling */
.i-am-just-before + .this-element { }

/* or any sibling preceding it */
.i-am-any-element-before ~ .this-element { }

/* There are some selectors called pseudo classes that can be used to select an
   element only when it is in a particular state */

/* for example, when the cursor hovers over an element */
selector:hover { }

/* or a link has been visited */
selector:visited { }

/* or hasn't been visited */
selected:link { }

/* or an element is in focus */
selected:focus { }

/* any element that is the first child of its parent */
selector:first-child {}

/* any element that is the last child of its parent */
selector:last-child {}

/* Just like pseudo classes, pseudo elements allow you to style certain parts of
    a document  */

/* matches a virtual first child of the selected element */
selector::before {}

/* matches a virtual last child of the selected element */
selector::after {}

/* At appropriate places, an asterisk may be used as a wildcard to select every
   element */
* { } /* all elements */
.parent * { } /* all descendants */
.parent > * { } /* all children */

/* Group any number of selectors to define styles that affect all selectors
   in the group */
selector1, selector2 { }

/* ####################
   ## PROPERTIES
   #################### */

selector {

    /* Units of length can be absolute or relative. */

    /* Relative units */
    width: 50%;       /* percentage of parent element width */
    font-size: 2em;   /* multiples of element's original font-size */
    font-size: 2rem;  /* or the root element's font-size */
    font-size: 2vw;   /* multiples of 1% of the viewport's width (CSS 3) */
    font-size: 2vh;   /* or its height */
    font-size: 2vmin; /* whichever of a vh or a vw is smaller */
    font-size: 2vmax; /* or greater */

    /* Absolute units */
    width: 200px;     /* pixels */
    font-size: 20pt;  /* points */
    width: 5cm;       /* centimeters */
    min-width: 50mm;  /* millimeters */
    max-width: 5in;   /* inches */

    /* Colors */
    color: #F6E;                    /* short hex format */
    color: #FF66EE;                 /* long hex format */
    color: tomato;                  /* a named color */
    color: rgb(255, 255, 255);      /* as rgb values */
    color: rgb(10%, 20%, 50%);      /* as rgb percentages */
    color: rgba(255, 0, 0, 0.3);    /* as rgba values (CSS 3) Note: 0 <= a <= 1 */
    color: transparent;             /* equivalent to setting the alpha to 0 */
    color: hsl(0, 100%, 50%);       /* as hsl percentages (CSS 3) */
    color: hsla(0, 100%, 50%, 0.3); /* as hsl percentages with alpha */

    /* Borders */
    border-width:5px;
    border-style:solid;
    border-color:red;      /* similar to how background-color is set */
    border: 5px solid red; /* this is a short hand approach for the same */
    border-radius:20px;    /* this is a CSS3 property */

    /* Images as backgrounds of elements */
    background-image: url(/img-path/img.jpg); /* quotes inside url() optional */

    /* Fonts */
    font-family: Arial;
    /* if the font family name has a space, it must be quoted */
    font-family: "Courier New";
    /* if the first one is not found, the browser uses the next, and so on */
    font-family: "Courier New", Trebuchet, Arial, sans-serif;
}
```

Three Methods to define CSS
```
<!-- You need to include the css file in your page's <head>. This is the
     recommended method. Refer to http://stackoverflow.com/questions/8284365 -->
<link rel='stylesheet' type='text/css' href='path/to/style.css'>

<!-- You can also include some CSS inline in your markup. -->
<style>
   a { color: purple; }
</style>

<!-- Or directly set CSS properties on the element. -->
<div style="border: 1px solid red;">
</div>
```

An element may be targeted by multiple selectors and may have a property set on it in more than once. In these cases, one of the rules takes precedence over others. Rules with a more specific selector take precedence over a less specific one, and a rule occurring later in the stylesheet overwrites a previous one (which also means that if two different linked stylesheets contain rules for an element and if the rules are of the same specificity, then order of linking would take precedence and the sheet linked latest would govern styling) .

```
/* A */
p.class1[attr='value']

/* B */
p.class1 { }

/* C */
p.class2 { }

/* D */
p { }

/* E */
p { property: value !important; }
and the following markup:

<p style='/*F*/ property:value;' class='class1 class2' attr='value'>
```
The precedence of style is as follows. Remember, the precedence is for each property, not for the entire block.

* E has the highest precedence because of the keyword !important. It is recommended that you avoid its usage.
* F is next, because it is an inline style.
* A is next, because it is more “specific” than anything else. It has 3 specifiers: The name of the element p, its class class1, an attribute attr='value'.
* C is next, even though it has the same specificity as B. This is because it appears after B.
* B is next.
* D is the last one.

Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element. So in

`body #content .data img:hover`

the specificity value would be 122 (0,1,2,2 or 0122): 100 for #content, 10 for .data, 10 for :hover, 1 for body and 1 for img.” [CSS Specificity]

---------------------------------------------------

## **Flexbox CodePen**

**Challenger 1**

https://codepen.io/nimaboscarino/pen/eYJYBOq

```
/* Do not edit this code, instead scroll down to the bottom and add new CSS rules!

You DO NOT need to make the heights of the divs match the heights in the screenshots from Compass
*/

/* In fact, don't even worry about the code here!! */

.box {
  flex: 1;
  height: 150px;
  font-size: 40px;
  margin: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.a {
  background: #B6BFA0;
}

.b {
  background: #6D9887;
  height: 250px
}

.c {
  background: #EC82B5;
  flex-basis: 30rem;
  height: 250px; 
}

/* Add your code below */
.container {
  display: flex;
  flex-direction: row-reverse;
  height: 250px;
}
```

**Challenger 2**

https://codepen.io/nimaboscarino/pen/KKVKNmj
```
/* Do not edit this code, instead scroll down to the bottom and add new CSS rules! */

/* In fact, don't even worry about the code here!! */

.box {
  flex: 1;
  min-height: 150px;
  font-size: 40px;
  margin: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.a {
  background: #EC6443;
}

.b {
  background: #48998D;
}

.c {
  background: #C6D86D;
}

.d { 
  background: #54494B;
}

.e {
  background: #B23C86;
}

.f {
  background: #D83A3D;
}

.g {
  background: #2F294D;
}
/* Add your code below */
.two {
  display: flex;
  flex-direction: row;
}

.container {
  display: flex;
  flex-direction: row;
}

.one {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-basis: 20rem;
}
```
---------------------------------------------------

## **J Query**
```
// Event binding using a convenience method
$( "#helloBtn" ).click(function( event ) {
    alert( "Hello." );
});

// The many ways to bind events with jQuery
// Attach an event handler directly to the button using jQuery's
// shorthand `click` method.
$( "#helloBtn" ).click(function( event ) {
    alert( "Hello." );
});
 
// Attach an event handler directly to the button using jQuery's
// `bind` method, passing it an event string of `click`
$( "#helloBtn" ).bind( "click", function( event ) {
    alert( "Hello." );
});
 
// As of jQuery 1.7, attach an event handler directly to the button
// using jQuery's `on` method.
$( "#helloBtn" ).on( "click", function( event ) {
    alert( "Hello." );
});
 
// As of jQuery 1.7, attach an event handler to the `body` element that
// is listening for clicks, and will respond whenever *any* button is
// clicked on the page.
$( "body" ).on({
    click: function( event ) {
        alert( "Hello." );
    }
}, "button" );
 
// An alternative to the previous example, using slightly different syntax.
$( "body" ).on( "click", "button", function( event ) {
    alert( "Hello." );
});

// Binding a named function
function sayHello( event ) {
    alert( "Hello." );
}
 
$( "#helloBtn" ).on( "click", sayHello );

// Preventing a default action from occurring and stopping the event bubbling
$( "form" ).on( "submit", function( event ) {
 
    // Prevent the form's default submission.
    event.preventDefault();
 
    // Prevent event from bubbling up DOM tree, prohibiting delegation
    event.stopPropagation();
 
    // Make an AJAX request to submit the form data
});

// Logging an event's information
$( "form" ).on( "submit", function( event ) {
 
    // Prevent the form's default submission.
    event.preventDefault();
 
    // Log the event object for inspectin'
    console.log( event );
 
    // Make an AJAX request to submit the form data
});
```

---------------------------------------------------

## **Event Listeners**

`element.addEventListener(<event-name>, <callback>, <use-capture>);`

`element.removeEventListener(<event-name>, <callback>, <use-capture>)`
* But removeEventListener has one catch: You must have a reference to the callback function that was originally bound. Simply calling element.removeEventListener(‘click’); will not work.
```
Example that will NOT work
var element = document.getElementById('element');

function callback() {
  alert('Hello once');
  element.removeEventListener('click', callback);
}

// Add listener
element.addEventListener('click', callback);

Fix with BIND
// Overwrite the original function with
// one bound to the context of 'user'
user.greeting = user.greeting.bind(user);

// Attach the bound user.greeting as a callback
button.addEventListener('click', user.greeting);
button.removeEventListener('click', user.greeting);
```

```
child.addEventListener('click', function(event) {
 event.stopPropagation();
});

parent.addEventListener('click', function(event) {
 // If the child element is clicked
 // this callback will not fire
});
```
* Calling event.stopPropagation() will not prevent any additional event listeners from being called on the current target if multiple listeners for the same event exist. If you wish to prevent any additional listeners from being called on the current node, you can use the more aggressive event.stopImmediatePropagation() method.

In Web applications, developers usually want to manage the navigation themselves, without causing the page to refresh. To do this, we need to prevent the browser’s default response to clicks and instead do our own thing. To do this, we call event.preventDefault().
```

anchor.addEventListener('click', function(event) {
  event.preventDefault();
  // Do our own thing
});

```
Delegate Event Listeners
```
var list = document.querySelector('ul');

list.addEventListener('click', function(event) {
  var target = event.target;

  while (target.tagName !== 'LI') {
    target = target.parentNode;
    if (target === list) return;
  }

  // Do stuff here
});

// Not using event delegation
$('li').on('click', function(){});

// Using event delegation
$('ul').on('click', 'li', function(){});
```

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <textarea id="textloc">Placeholder</textarea>
  </div>
  <script>
    const txt = document.getElementById("textloc");
    txt.addEventListener("input", () => {
      alert("input")
      console.log("input")
    });
    txt.addEventListener("keydown", () => {
      alert("keydown")
      console.log("keydown")
    });
    txt.addEventListener("keyup", () => {
      alert("keyup")
      console.log("keyup")
    });
    txt.addEventListener("keypress", () => {
      alert("keypress")
      console.log("keypress")
    });
  </script>
</body>
</html>
```

---------------------------------------------------
