# Day 2 - Contents: 

* Creating application from `zero` already with the `src`: 
```js
mkdir application-name application-name/src && cd application-name && code .
```
* Start a `Node.js package` with the command: 
```js
npm init -y
```
* Install `Express` with the command: 
```js
npm i express@4.17.1 --save-exact
```
* Install and configure `ESLint` with the command: 
```js
npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 --save-dev --save-exact
```
* Creating the files referring to the `ESLint` configuration in the root: 
```js
touch .eslintignore .eslintrc.json
```
* File `.eslintignore`: 
```js
node_modules
```
* File `.eslintrc.json`: 
```js
{
  "env": {
    "es2020": true
  },
  "extends": "trybe-backend",
  "rules": {
    "sonarjs/no-duplicate-string": ["error", 5]
  }
}
```
* File `.gitignore`: 
```js
node_modules
```
* Creating the server and configuring: 
* - Directory `src` with the file `app.js`: 
```js
const express = require('express');

const app = express();

module.exports = app;
```
* - Directory `src` with the file `server.js`: 
```js
const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));
```
* In the `package.json` file insert 3 scripts inside the "scripts" key: 
```js
"start": "node src/server.js",
"dev": "nodemon src/server.js",
"lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."
```
* Install the nodemon package: 
```js
npm i nodemon@2.0.15 --save-dev --save-exact
```
