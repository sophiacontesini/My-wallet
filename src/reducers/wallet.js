// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_ERROR, API_REQUEST, API_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_REQUEST:
    return {
      ...state,
    };
  case API_SUCCESS:
    return {
      ...state,
      currencies: action.data,
    };
  case API_ERROR:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
