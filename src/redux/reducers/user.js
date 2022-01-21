import { ADD_USER } from '../actions';

const initialState = {
  email: '',
};

const user = ({ type, email }, state = initialState) => {
  switch (type) {
    case ADD_USER:
      return {
        email,
      };
    default:
      return state;
  }
};

export default user;
