import { ADD_ENQUIRY } from '../actions/actionTypes'

const initialState = {
  enquiry: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENQUIRY:
      return {
        ...state, enquiry: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;