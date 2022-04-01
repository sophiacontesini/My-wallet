// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const ADD_EXPENSES = 'EXPENSES';

export const expenses = (value) => ({ type: ADD_EXPENSES, value });

export const loginAtion = (email) => ({ type: LOGIN, email });

export const apiRequest = () => ({ type: API_REQUEST });

export const apiSuccess = (data) => ({ type: API_SUCCESS, data });

export const apiError = (error) => ({ type: API_ERROR, error });

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(apiRequest());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const getSigla = Object.keys(data).filter((sigla) => sigla !== 'USDT');
      dispatch(apiSuccess(getSigla));
    } catch (error) {
      dispatch(apiError(error));
    }
  };
}
