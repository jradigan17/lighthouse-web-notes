## **Notes Week 9**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **Viewport**

Viewport units: vw, vh, vmin, vmax

* 1vw is 1/100th of the size of the width of the viewport.

CSS specific to media
```
@media (max-width: 600px) {
  color: blue
}

@media (min-width:400px) and (max-width:600px) {
  header{
    // your code here
  }
}

@media print{
  nav, .ad{
    display:none;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
}

@media not screen, screen and (max-width:400px) {
  nav, .ad{
    display:none;
  }
}
```

Link through specific style sheet. Style sheet would get used like any other
```
<link ref="stylesheet" href="small.css" media="(max-width:600px)">
```

---------------------------------------------------

## **Em and Rem**

The em and rem measurements offer an alternative to using px to size elements and type on the page. em units are sized relative to its parent element, whereas rem, or root em, are sized relative to the font size of the root element - usually, this is the `<html>` element.

em -> relative to parent font-size
rem -> relative to root font-size (html tag)

---------------------------------------------------

## **User Interface**
```
@media (max-width: 50em) {
  .cards {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: inline mandatory;
    scroll-behavior: smooth;
  }
  .cards .card {
    flex-shrink: 0;
    flex-basis: 15em;
    scroll-snap-align: start;
  }
}
```
* The logical version of overflow-x is overflow-inline which would better match with the value for scroll-snap-type. This example uses the physical version for better cross-browser support.

* The scroll-snap properties ensure that the items can be swiped in a way that feels smooth. Thanks to scroll-snap-type: inline mandatory, the items snap into place.

* When the screen is large enough—wider than 50em in this case—switch over to grid and display the items in rows and columns, without hiding anything

---------------------------------------------------

## **Ideal Widths**

  /* Smartphones: minimum width of 320px to maximum width of around 420px */
  @media only screen and (min-width: 320px) and (max-width: 420px) {
    /* Write smartphone only styles here */
  }

  /* Another smartphone breakpoint is maximum width of around 420px */
  @media only screen and (max-width: 420px) {
    /* Write smartphone only styles here */
  }

  /* Tablet: minimum width of 768px to maximum width of 1024px */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* Write Tablet only CSS here */
  }

  /* Another tablet breakpoint is maximum width of 1024px */
  @media only screen and (max-width: 1024px) {
    /* Write CSS rules that target Tablets screen sizes downwards - including smartphones */
  }

  /* Another tablet breakpoint is minimum width of 768px */
  @media only screen and (min-width: 768px) {
    /* Write CSS rules that target Tablets screen sizes upwards - including desktops */
  }

  /* Laptops / Desktops: minimum width of 1024px */
  @media only screen and (min-width: 1024px) {
    /* Write CSS rules that target Laptop/Desktop screen sizes and beyond */
  }

  /* Laptops / Desktops: minimum width of 960px */
  @media only screen and (min-width: 960px) {
    /* Write CSS rules that target small laptop screen sizes and beyond */
  }

---------------------------------------------------

## **Viewport Zooming - Disabling**

`<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />`

---------------------------------------------------

## **SASS**

https://www.youtube.com/watch?v=Zz6eOVaaelI

https://sass-lang.com/guide

`npm install -g sass`

Running sass input.scss output.css from your terminal would take a single Sass file, input.scss, and compile that file to output.css.

You can also watch individual files or directories with the --watch flag. The watch flag tells Sass to watch your source files for changes, and re-compile CSS each time you save your Sass. If you wanted to watch (instead of manually build) your input.scss file, you'd just add the watch flag to your command, like so:

`sass --watch input.scss output.css`

You can watch and output to directories by using folder paths as your input and output, and separating them with a colon. In this example:

`sass --watch app/sass:public/stylesheets`

Sass would watch all files in the app/sass folder for changes, and compile CSS to the public/stylesheets folder.

SASS
```
SCSS SYNTAX
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
CSS
```
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading underscore. You might name it something like _partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @use rule.

You don't have to write all your Sass in a single file. You can split it up however you want with the @use rule. This rule loads another Sass file as a module, which means you can refer to its variables, mixins, and functions in your Sass file with a namespace based on the filename. Using a file will also include the CSS it generates in your compiled output!

```
SCSS SYNTAX
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
```
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```
```
CSS OUTPUT
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}
```

To create a mixin you use the @mixin directive and give it a name. We've named our mixin theme. We're also using the variable $theme inside the parentheses so we can pass in a theme of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin.

```
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```
What the above code does is tells .message, .success, .error, and .warning to behave just like %message-shared. That means anywhere that %message-shared shows up, .message, .success, .error, & .warning will too. The magic happens in the generated CSS, where each of these classes will get the same CSS properties as %message-shared. This helps you avoid having to write multiple class names on HTML elements.

You can extend most simple CSS selectors in addition to placeholder classes in Sass, but using placeholders is the easiest way to make sure you aren't extending a class that's nested elsewhere in your styles, which can result in unintended selectors in your CSS.

Note that the CSS in %equal-heights isn't generated, because %equal-heights is never extended.

---------------------------------------------------

## **Algorithms**

binary search: `log2 n = x + 1` (logrithmic algorithm)

When we evaluate an algorithm using Big O notation, there are three main things to remember:

* We only care about arbitrarily large input.
  * What does the run time of binary search look like when we give it an array of one million items?
* We drop the non-dominant terms.
  * When our algorithm had a running time of (n^2+n)/2, it was the n^2 that was hurting us. So we'll just forget about everything else.
* We drop constant terms.
  * If you graph (n^3)/2 or (n^3)*2, it has pretty much the same curve as n^3, so let's just get rid of the constant 2.

Big O notation is used to describe how an algorithm's complexity grows relative to its input. It is not used to describe the exact running time of an algorithm. Growth complexity - not run time.

Examples:

* 2n + 3 will grow linearly, O(n)
* 100n^2 will grow exponentially, O(n^2)
* log n + 1000000000 will grow logarithmically, O(log n)
* array[2] + array[3] + array[4];, O(1)

When we describe an algorithm using Big O notation, we:

* Only care about arbitrarily large input.
* Drop the Non-Dominant Terms.
* Drop Constants.

Some of the more common Big O running times are:

* Logarithmic O(log n)
* Quadratic O(n^2)
* Linear O(n)
* Constant O(1)


Order of Big O

* Constant O(1)
* Logrithmic O(log n)
* Linear O(n)
* Linearithmic O(n log n)
* Quadratic O(n^2)
* Polynomial O(n^c)
* Exponential O(c^n)
* Factorial O(n!)
* Infinite O(♾️)

Algorithms Bring 3 Items to Programming

1) Worst Case Scenario Run Time
2) Best Case Scenario (omega)
3) Big O - Growth 

---------------------------------------------------
