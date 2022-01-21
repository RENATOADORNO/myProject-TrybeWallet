import {
  ADD_CURRENCIES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  CHANGE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const addNewExpense = (payload, exchangeRates) => (
  {
    id: payload.id,
    value: payload.value,
    currency: payload.moeda,
    description: payload.description,
    method: payload.method,
    tag: payload.tag,
    exchangeRates,
  }
);

const wallet = ({
  payload, exchangeRates, type, currencies, idDelete, idChange,
}, state = INITIAL_STATE) => {
  switch (type) {
    case ADD_EXPENSE:
      if (payload.currency === 'BRL') {
        return {
          ...state,
          expenses: [...state.expenses, {
            id: payload.id,
            value: payload.value,
            currency: payload.moeda,
            description: payload.description,
            method: payload.method,
            tag: payload.tag,
            exchangeRates: {
              BRL: {
                name: 'Real Brasileiro',
                ask: 1,
              },
            },
          }],
        };
      }
      return {
        ...state,
        expenses: [...state.expenses, addNewExpense(payload, exchangeRates)],
      };
    case ADD_CURRENCIES:
      return {
        ...state,
        currencies,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== idDelete),
      };
    case CHANGE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== idChange),
      };
    default:
      return state;
  }
};

export default wallet;
