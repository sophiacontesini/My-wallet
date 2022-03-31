import { combineReducers } from 'redux';
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import user from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  user,
  walletReducer,
});

export default rootReducer;
