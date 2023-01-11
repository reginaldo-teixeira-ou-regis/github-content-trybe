import { ADD_PERSONAL_INFO } from '../actions/index';

const initialState = {
  personal: {
    name: '',
    email: '',
    CPF: '',
    address: '',
    city: '',
    uf: '' },
};

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_PERSONAL_INFO:
    return {
      ...state,
      personal: { ...action.payload },
    };
  default:
    return state;
  }
};

export default personalReducer;
