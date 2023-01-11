import { ADD_PROFESSIONAL_INFO } from '../actions/index';

const initialState = {
  professional: {
    curriculum: '',
    job: '',
    description: '',
  },
};

const professionalReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_PROFESSIONAL_INFO:
    return {
      ...state,
      professional: { ...action.payload },
    };
  default:
    return state;
  }
};

export default professionalReducer;
