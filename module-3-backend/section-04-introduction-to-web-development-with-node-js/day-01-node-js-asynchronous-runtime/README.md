# Day 1 - Contents: 

* Node.js - System of Modules: 
* - `Modules Internal` (or core modules) are `included in Node.js` and `installed` along with it when we download the `runtime`; 
* - `Modules Local` are those `defined together` with our application; 
* - `Modules of Third` are those `created by other developers` and made available for use through `npm`; 
* There are two widespread module systems in the JavaScript community for importing and exporting modules:  
* - `Modules ES6` - In this specification, modules are imported using the `import` keyword, having as counterpart export keyword as to `export` them; 
* - `Modules CommonJS`- In CommonJS the `keywords used` for `importing and exporting` modules are, respectively, `require()` and `module.exports`; 
* Examples of how to export modules:  
```js
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;
```
```js
// index.js
const brlValue = require('./brlValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7
```
```js
const { brl, usdToBrl } = require('./brlValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7
```
* Examples of as Importing Local Modules: 
```js
// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();
```
* Examples of as Importing Internal Modules: 
```js
// Passamos o nome do pacote como parâmetro para a função require(); 

const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');
```
* Third modules are imported in the same way as internal modules, we just need to first install them in the project folder where we want to use them, as they are not native to Node.js; 
* `NPM` (Node Package Manager) is the `official repository` for publishing `Node.js` packages; 
* The `CLI` of `npm` is an official tool that helps us `manage packages`, whether they are our `application's` dependencies or our `own packages`; 
* The `npm init` command allows us to quickly and easily in a way create a `new Node.js package` in the folder where it is run; 
* The `npm run` command do with makes `npm` run a certain `script` configured in the `package.json`; 
* The `npm start` command acts as a "shortcut" to the `npm run start` command, since its function is to run the `start` script defined in the `package.json`; 
* The `npm install` command is the responsible for downloading and installing `Node.js` packages from `NPM` for our package; 
* 
