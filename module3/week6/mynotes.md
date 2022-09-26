## **Notes Week 6**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **Various commands**

`export PS1="\e[0;35m\u: \W\$ \e[m"` - added to home => labber => .bashrc: change prompt colour command line terminal (https://www.cyberciti.biz/faq/bash-shell-change-the-color-of-my-shell-prompt-under-linux-or-unix/)

---------------------------------------------------

## **Tips**

Explore "Post Man" API interface

Form add new line `<br></br>`

---------------------------------------------------

## **Promises**

See  `fileserver` folder under networking for promises example

Any argument after resolve or reject will be passed as an argument into .then or .catch. Notihing is passed - no issue

Function can only be resolved once. 

If resolved is passed a promise, the promise executes first

---------------------------------------------------

## **cURL**

https://curl.se/docs/manpage.html

Resource: https://www.thegeekstuff.com/2012/04/curl-examples/

Diplay contents `curl http://www.centos.org`

Store output in file `$ curl http://www.centos.org > centos-org.html`

Save cURL Output to a file `$ curl -o mygettext.html http://www.gnu.org/software/gettext/manual/gettext.html`

  * -o (lowercase o) the result will be saved in the filename provided in the command line
  * -O (uppercase O) the filename in the URL will be taken and it will be used as the filename to store the result

Fetch Multiple Files at a time `$ curl -O URL1 -O URL2`

Follow HTTP Location Headers with -L option `$ curl -L http://www.google.com` or in our case `$ curl -L http://www.google.in`

Continue/Resume a Previous Download `curl -C - -O http://www.gnu.org/software/gettext/manual/gettext.html`

Stop between a download `Crtl-C`

Limit Rate of Data Transfer `curl --limit-rate 1000B -O http://www.gnu.org/software/gettext/manual/gettext.html`

Download a file only if it is modified before/after the given time `$ curl -z 21-Dec-11 http://www.example.com/yy.html` or modified beofre given time `$ curl -z -21-Dec-11 http://www.example.com/yy.html`

If website required credentials/authentication `$ curl -u username:password URL`

List/Download using Ranges `$ curl   ftp://ftp.uk.debian.org/debian/pool/main/[a-z]/`

Can also do verbose and trace function - see webpage #12 for details

Get Definition of a Word using DICT Protocol `$ curl dict://dict.org/d:bash` & list available dictionaries `$ curl dict://dict.org/show:db` `$ curl dict://dict.org/d:bash:foldoc`

Can also send mail and proxy server - see webpage #14 & #15 for details


### **cURL Commands**

`curl -i http://localhost:8080/hello`

`curl -i http://localhost:8080/u/b2xVn2`

`curl -L http://localhost:8080/u/b2xVn2`

`curl -X POST "http://localhost:8080/urls/9sm5xK/delete"`

`curl -X POST -i localhost:8080/login -d "username=vanillaice"` -d flag is used to send form data in the same way a browser would when submitting our login form

`curl -X POST -i localhost:8080/logout`

`curl -X POST -d "longURL=http://www.lighthouselabs.com" localhost:8080/urls`

`curl -X POST -i localhost:8080/urls/sgq3y6/delete`

`curl -X POST -i example.com --cookie "user_id=20126"`

---------------------------------------------------

## **DNS**

* A: most common; map a hostnames to IP address (IPv4, 32-bit address)
* NS: Name Server that is responsible for a DNS zone
* MX: Mail Exchange record specifies where email gets sent to
* CNAME: Canonical Name, an alias for another hostname
* AAAA: similar to A, but uses IPv6, 128-bit address


Iterative queries to trace DNS

`dig +trace google.com`

  1. Starting the journey at the root name servers - (*.root-servers.net)
  2. continuing to the .com top level domain (TLD) - (*.gtld-servers.net)
  3. followed by the google.com Name Servers (NS) - (ns*.google.com)
  4. dig +trace wwand concluded with fifteen (!) Address Records (A) - (66.199.151.*)

---------------------------------------------------

## **ejs - View Template**

`npm install ejs` - install dependency 

`app.set("view engine", "ejs"); // Use ejs as view engine`

`templateVars` - always use to pass into ejs files

Use `<%- include('RELATIVE/PATH/TO/FILE') %>` to embed an EJS partial in another file.

* The hyphen <%- instead of just <% to tell EJS to render raw HTML.
* The path to the partial is relative to the current file.

To echo a single variable, you can use `<%= tagline %>`.

The EJS partial has access to all the same data as the parent view. But be careful. If you are referencing a variable in a partial, it needs to be defined in every view that uses the partial or it will throw an error.

You can also define and pass variables to an EJS partial in the include syntax like this: `{variant: 'compact'}`

Since we're following the Express convention of using a views directory, we can take advantage of a useful EJS shortcut! EJS automatically knows to look inside the views directory for any template files that have the extension .ejs. This means we don't need to tell it where to find them. It also means that we do not need to include the extension of the filename when referencing it.

When sending variables to an EJS template, we need to send them inside an object, even if we are only sending one variable. This is so we can use the key of that variable (in the above case the key is urls) to access the data within our template.

`<%= %>` syntax, we tell EJS that we want the result of this code to show up on our page.

<!-- This line will not show up on the page -->
`<% if(greeting) {%>`
<!-- This line will only show if greeting is truthy -->
`<h1><%= greeting %></h1>`
`<% }%>`

ejs conditionals
```
<% if(true){ %>
   <h1>foo</h1>
<% } %>
<% else{ %>
   <h1>bar</h1>
 <% } %>
 ```
---------------------------------------------------

## **HTML**

The href attribute specifies the URL of the page the link goes to.

If the href attribute is not present, the `<a>` tag will not be a hyperlink.

Tip: You can use href="#top" or href="#" to link to the top of the current page!

To render an image on browser HTML need to make the folder public

`app.use(express.static("public")); // Enable public folder`

---------------------------------------------------

## **Nodemon**

Nodemon is a utility that will monitor for any changes in our source code and automatically restart our server.

`npm install --save-dev nodemon`

`./node_modules/.bin/nodemon -L express_server.js` run the application

Update the scripts to the following in package.json:
```
"scripts": {
  "start": "./node_modules/.bin/nodemon -L express_server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
Run server from now on with npm start. Make sure main is referencing the correct file

---------------------------------------------------

## **HTTP Request Method**

When using HTTP for a request on server/client - need `client.end()` to load webpage

---------------------------------------------------

## **Express**

`const app = express();`

Visit [Node’s download site](https://nodejs.org/en/download/) and click on the version that matches your operating system 

`npm install express --save`

My own custom middlewares - need `next()` so it knows to moveon 

Express will run through each middleware before going to endpoint

```
app.use((req, res, next) => {
  console.log('New request!!', req.method, req.url)
  next()
})
```
When using Middleware - make sure to use `return` so that the code does not try to move on after it hits an error

Ensure to use the following in express so Body Parser works
```
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
```
---------------------------------------------------

## **Chrome Dev Tools**

Source - source code and files

Network - shows path trying to access including response codes & method

---------------------------------------------------

## **Morgan Middleware**

Free install - `npm i morgan`

---------------------------------------------------

## **Types of Requests**

- Post - Create
- Get - Read
- Put - Modify/Update
- Delete - Delete

---------------------------------------------------

## **Learn Git Branching**

https://learngitbranching.js.org/

---------------------------------------------------

## **Cookie Parser**

Method through express - http://expressjs.com/en/api.html#res.cookie

README documentation - https://github.com/expressjs/cookie-parser

`npm install cookie-parser`

`const cookieParser = require('cookie-parser');`

set cookie `res.cookie` 

clear cookie `res.clearCookie`

---------------------------------------------------
