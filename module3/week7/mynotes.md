## **Notes Week 7**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------
## **Random String Generator**

`const uuid = require('uuid/v4');`

`const idUser = uuid().substr(0, 8);`

---------------------------------------------------
## **bcryptjs**

`npm install bcryptjs`

`const bcrypt = require("bcryptjs");`

```
const hashedPassword = bcrypt.hashSync(password, 10);
bcrypt.compareSync("purple-monkey-dinosaur", hashedPassword); // returns true
bcrypt.compareSync("pink-donkey-minotaur", hashedPassword); // returns false
```
---------------------------------------------------

## **Cookie Session**
```
$ npm install cookie-session

const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
  // Cookie Options
  maxAge: 60 * 1000 // (24 * 60 * 60 * 1000) // 24 hours
})); // Cookies

req.session.user_id = "some value"; // set

req.session.user_id // call
 
req.session.user_id = null // clear
```
https://github.com/expressjs/cookie-session

When the word session comes up in web development, it can mean a variety of things. Here's a quick list of the different types of sessions we might see while developing a website with secure log in capabilities.

- session cookies - cookies that expire after a browser is closed 
- user session - login/logout features on a site  
- user session - the event of a user using an application   
- session - encrypted cookies   
- session - abstraction that refers to user data, can be tracked in various ways: 

  * storing data in an encrypted cookie   
  * storing an id in an encrypted cookie with a session store on the server-side

---------------------------------------------------

## **Method Override**
```
npm install method-override --save

const methodOverride = require('method-override');

app.use(methodOverride('_method')); // override POST having ?_method=DELETE

<form method="POST" action="/urls/9sm5xK?_method=DELETE">...</form>
```
---------------------------------------------------

## **.env files**

using bcrypt works for new entries to databases and files etc. but does not work to encrypt your files being uploaded to git hub

use .env files and add .env to your gitignore files

email: process.env.email1

store your variables in .env 

---------------------------------------------------

## **DATA PROTECTION**

- Encrypt the data at the server (bcrypt & .env)
- Encyrpt the data at the client (cookie session)
- you ARE NOT protected in the payload information
- HTTPS & encrypted networks only!

---------------------------------------------------
