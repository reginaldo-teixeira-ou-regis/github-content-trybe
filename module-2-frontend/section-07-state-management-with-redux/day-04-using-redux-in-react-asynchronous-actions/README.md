# Day 4 - Contents: 

* `Redux-thunk` é a `solução padrão` para se ter `actions assíncronas`; 
* To use the `redux-thunk` you need to install it via `npm` - `npm install redux-thunk`; 
* To use `redux-thunk` you need to make use of the function `applyMiddleware()` of `Redux`; 
* Store Created - `const store = createStore(reducer, applyMiddleware(thunk));`; 
* To use the `redux-thunk` together with the `Redux Devtools` - `const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));`; 
* With `redux-thunk`, you can define an `Action Creator` that returns a `function` instead of returning an object - Function `Thunk Action Creator`; 
* Guided examples; 
