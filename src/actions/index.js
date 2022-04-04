// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const CURRENCIE_ACTION = 'CURRENCIE_ACTION';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const expenses = (expense, data) => ({
  type: ADD_EXPENSES,
  expenses: { ...expense, exchangeRates: data } });

export const loginAtion = (email) => ({ type: LOGIN, email });

export const currencieAction = (currencies) => ({ type: CURRENCIE_ACTION, currencies });

// export const apiSuccess = (data) => ({ type: API_SUCCESS, data });

// export const apiError = (error) => ({ type: API_ERROR, error });

export function fetchAPI(objeto) {
  return async (dispatch) => {
    console.log(objeto);
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const getSigla = Object.keys(data).filter((sigla) => sigla !== 'USDT');
    if (objeto) {
      dispatch(expenses(objeto, data));
    } else {
      dispatch(currencieAction(getSigla));
    }
  };
}

// export function fetchExchangeRates() {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//       const dataRates = await response.json();

//       dispatch(expenses(dataRates));
//     } catch (error) {
//       dispatch(apiError(error));
//     }
//   };
// }
