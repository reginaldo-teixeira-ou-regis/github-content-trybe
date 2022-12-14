import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import characterReducer from './reducers/charactersReducer';

const store = createStore(characterReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
