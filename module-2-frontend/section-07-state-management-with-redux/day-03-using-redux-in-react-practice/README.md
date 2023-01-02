# Checklist do Redux com React

###### 💡 É importante ressaltar que a estrutura das pastas apresentada abaixo é apenas uma sugestão. Você tem liberdade para estruturar da maneira que preferir!

### *Antes de começar*
* - [ ] pensar como será o *formato* do seu estado global
* - [ ] pensar quais actions serão necessárias na sua aplicação

### *Instalação*
* - [ ] npx create-react-app my-app-redux;
* - [ ] npm install –save redux react-redux;
* - [ ] npm install –save @redux-devtools/extension

### *Criar dentro do diretório `src`:*
* - [ ] diretório `redux`

### *Criar dentro do diretório `redux`*
* - [ ] diretório `actions`
* - [ ] diretório `reducers`
* - [ ] arquivo index.js

### *Criar dentro do diretório `actions`:*
* - [ ] arquivo `index.js`.

### *Criar dentro do diretório `reducers`:*
* - [ ] arquivo `index.js`.

### *Criar dentro do arquivo `redux/index.js`:*
* - [ ] importar o createStore
* - [ ] configurar o [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* - [ ] importar o rootReducer
* - [ ] criar e exportar a store

Exemplo:
```js
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
```


### *Criar dentro do arquivo `redux/reducers/index.js`:*
* - [ ] estado inicial
* - [ ] criar função reducer com `switch` retornando apenas a opção `default`
* - [ ] criar `rootReducer` usando o `combineReducers`
* - [ ] exportar `rootReducer`

Exemplo:
```js
import { combineReducers } from 'redux';

const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;
```


### *No arquivo `./src/index.js:*
* - [ ] importar a `store`
* - [ ] importar o `Provider`, para fornecer os estados a todos os componentes encapsulados pelo `<App />`

Exemplo:
```js
// Na importação
import { Provider } from 'react-redux';
import store from './redux'
```

```js
// No render
 <Provider store={ store } >
   <App />
 </Provider>
```


### *No arquivo `redux/actions/index.js`:*
* - [ ] criar e exportar os actionTypes

Exemplo:
```js
// ACTIONS TYPES
export const ADD_EMAIL = 'ADD_EMAIL';
```


* - [ ] criar e export os actions creators necessários

Exemplo:
```js
// ACTIONS CREATORS
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
})
```


### *Nos reducers:*
* - [ ] criar os casos para cada action criada, retornando o devido estado atualizado

### *Nos componentes que irão ler o estado:*
* - [ ] criar a função `mapStateToProps`
* - [ ] exportar usando o `connect`

### *Nos componentes que irão modificar o estado:*
* - [ ] acessar a função `dispatch` diretamente das props do componente
* - [ ] exportar usando o `connect`

Exemplo:
```js
// No import
import { connect } from 'react-redux';
```

```js
// No export
export default connect(mapStateToProps, mapDispatchToProps)(Component)
```
