# Day 1 - Contents: 

* Node.js - System of Modules: 
* - `Modules Internal` (or core modules) are `included in Node.js` and `installed` along with it when we download the `runtime`; 
* - `Modules Local` are those `defined together` with our application; 
* - `Modules of Third` are those `created by other developers` and made available for use through `npm`; 
* There are two widespread module systems in the JavaScript community for importing and exporting modules:  
* - `Modules ES6` - In this specification, modules are imported using the `import` keyword, having as counterpart export keyword as to `export` them; 
* - `Modules CommonJS`- In CommonJS the `keywords used` for `importing and exporting` modules are, respectively, `require()` and `module.exports`; 
* Exporting Modules: 
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
```js

```
