## **Notes Week 9**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **Time Ago**

https://timeago.org/

---------------------------------------------------

## **Content Distribution Networks (CDN)**

https://www.cdnjs.com

CDN javascript

---------------------------------------------------

## **Cross-Site Scripting**

XSS for short

template treats untrusted text as HTML example: `<script>alert('uh oh!');</script>`

Solutions

`$("<div>").text(textFromUser);`
```
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const safeHTML = `<p>${escape(textFromUser)}</p>`;
```

---------------------------------------------------

## **Public API**

https://github.com/public-apis/public-apis

---------------------------------------------------

## **Types of Ajax - See lecture**

- xml-HTTP request
- Fetch API
- Jquery 
  - jquery needs vendor folder with jquery min to download and use jquery
  - needs script take for the vendor file and for the javascript file to run
  - jquery has a $.ajax function with url, success, error
  - when defining const should use $ ex: const $title_films = 2;
  - ALTERNATE use google CDN to use jquery

---------------------------------------------------