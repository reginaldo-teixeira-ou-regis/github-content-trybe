# Day 2 - Contents: 

* Configuring Redux with React; 
* Create the `Application React`- `npx create-react-app my-app`; 
* The `redux` library and `react-redux` library - `npm install redux react-redux`; 
* The `react-redux` library performs the `connection` between the `Redux` and the `React`; 
* Creating the `Store` and the `Reducer`; 
* To create the `Global State` of the application we need to implement the `store`, importing and executing the `createStore` function of `redux`; 
* The `Redux Devtools` library - `npm install --save @redux-devtools/extension`; 
* Provider - `import { Provider } from 'react-redux';`; 
* Reading information of `Global State`; 
* Function `mapStateToProps` - `receives` the information of the `Global State` as a parameter and `returns` the values that are stored in the `store`; 
* Connect - `import { connect } from 'react-redux';`; 
* To `connect` the function `mapStateToProps` to our `component` we use the `connect`- `connect(mapStateToProps)(Component)`; 
* `Writing` in the `Global State`; 
* Creating the function `Reducer`; 
* The `reducer` function usually receive the `initial state` and an `action` as a parameter; 
* By default, the `action` will always return an `object` with the `type` key; 
* Action and Action Creator; 
* The `action` is an `object` that sends an action to the `reducer` that changes the `Global State`; 
* We can `send` other `values` to the `reducer`- `const action = { type: 'INCREMENT_COUNTER', payload: other-values }`; 
* The `actions creators` are functions that `create` and `return` an `action`; 
* Writing to the `Global State` with the function `dispatch()`; 
* Immutability of global state; 
* Using more than one `Reducer` with the `combineReducers` function, made available by the `redux` library; 
* When we use the function `combineReducers`, the `Global State` becomes an `object` whose keys are the `reducers`; 
