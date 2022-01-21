// ADD USER --------------------------------------------------------------------
export const ADD_USER = 'ADD_USER';

export const addUser = (email) => ({
  type: ADD_USER,
  email,
});

// ADD EXPENSE -----------------------------------------------------------------
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload, exchangeRates) => ({
  type: ADD_EXPENSE,
  payload,
  exchangeRates,
});

export const fetchExchange = (payload) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((exchanges) => dispatch(addExpense(payload, exchanges)));
};

// ADD_CURRENCIES ---------------------------------------------------------------
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});

export const fetchCurrency = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => {
      const maxLength = 3;
      const getCurrencies = Object.keys(currencies)
        .filter((currency) => currency.length === maxLength);
      dispatch(addCurrencies(getCurrencies));
    });
};

// DELETE EXPENSE --------------------------------------------------------------
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const deleteExpense = (idDelete) => ({
  type: DELETE_EXPENSE,
  idDelete,
});

// CHANGE EXPENSE --------------------------------------------------------------
export const CHANGE_EXPENSE = 'CHANGE_EXPENSE';

export const changeExpense = (idChange) => ({
  type: CHANGE_EXPENSE,
  idChange,
});
