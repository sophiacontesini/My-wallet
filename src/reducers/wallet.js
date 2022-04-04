// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, CURRENCIE_ACTION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0,
};
// acao depois do ponto de interrogacao so vai ser executada se o que está antes nao for undefined;
function getTotalValue(array) {
  return array?.reduce((acc, curValue) => {
    const { value, exchangeRates, currency } = curValue;
    acc += Number(value) * exchangeRates[currency || 'USD'].ask;
    return acc;
  }, 0).toFixed(2);
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, {
        ...action.expenses, id: state.expenses.length }], // mudar o id de um em um
      totalValue: getTotalValue([...state.expenses,
        { ...action.expenses, id: state.expenses.length }]), // somar os valores
    };
  case CURRENCIE_ACTION:
    console.log(action.currencies);
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};

export default wallet;
