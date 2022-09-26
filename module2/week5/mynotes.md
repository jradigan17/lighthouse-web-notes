## **Notes Week 5**
[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) & [Shortcut Keys](../../shortcuts.md)

---------------------------------------------------

## **TCP**

TCP, which stands for Transmission Control Protocol, provides a standard that allows machines to speak to each other.

Net (net) is a module that is built into Node. It allows our Node apps to use TCP

You can use `client.on` & `server.on` both on the server side and within the connection

---------------------------------------------------

## **FS write & Read**

The easiest way to write to files in Node.js is to use the `fs.writeFile()` API.
```
const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
```
`fs.writeFile( file, data, options, callback )`

`fs.access('file', err => err ? 'does not exist' : 'exists')`

The flags you'll likely use are

* r+ open the file for reading and writing
* w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if it does not exist
* a open the file for writing, positioning the stream at the end of the file. The file is created if it does not exist
* a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if it does not exist

---------------------------------------------------

## **Tips**

`conn.on("event name", functionThatDoesSomething);` - event handler - instance of socket class

Emojis - `window .`

---------------------------------------------------

## **Create Tunnel ngrok**

`npm install ngrok -g` - step 1

`ngrok authtoken 2CzFnZXDNErWr1WTxk69MlgT2cO_34y6dx998GBQWjwa4rbqr` - step 2 from: https://dashboard.ngrok.com/get-started/setup (don't include "config add-")

username: jradigan@hotmail.com - not through gitHub account

password:  

`ngrok tcp 3000` - Once authenticated, start a tunnel for port 3000. Run the following ngrok command in your other Vagrant terminal (again, make sure your server.js script is still running in another tab/window).

`tcp://6.tcp.ngrok.io:14621 -> localhost:3000` - port 14621, host 6.tcp.ngrok.io

**ngrok commands**
```
COMMANDS:
   authtoken    save authtoken to configuration file
   credits      prints author and licensing information
   http         start an HTTP tunnel
   start        start tunnels by name from the configuration file
   tcp          start a TCP tunnel
   tls          start a TLS tunnel
   update       update ngrok to the latest version
   version      print the version string
   help         Shows a list of commands or help for one command
```
---------------------------------------------------

## **JSON**

`JSON.parse(xxx)` - Parse a string as JSON, optionally transform the produced value and its properties, and return the value. example xxx: '{"a":1, "b":2, "foo":"bar"}'

`JSON.stringify(xxx)` - Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.

`delete` command to remove an object from a JSON.parsed object

---------------------------------------------------

## **Promises**

`npm i request-promise-native`

`const request = require('request-promise-native');`

`const { latitude, longitude } = JSON.parse(body);`

see week 5 lecture 2 for code notes

---------------------------------------------------

## **Objects** 
```
request.get('http://ww.google.com', (error, response, body) => {
  const {statusCode, body: resBody} = response;
});
```
same as:
```
const statusCode = response.statusCode

const resbody = response.body
```
---------------------------------------------------

## **Try & Catch**

Make sure to try the appropriate step - not a set timeout but the code inside the set timeout

```
function getMonthName(mo) {
  mo--; // Adjust month number for array index (1 = Jan, 12 = Dec)
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error('InvalidMonthNo'); // throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
```

`Try... catch` can allow the rest of your code to continue even if it catches an error


Into the function you can send call back functions and you can call then during an error or success

see Week 5 Lecture 2 for code notes

---------------------------------------------------
