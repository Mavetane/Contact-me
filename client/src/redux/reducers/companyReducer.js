import { ADD_COMPANY, GET_COMPANIES } from '../actions/actionTypes'

const initialState = {
  company: null,
  companies: [],

};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state, company: action.payload
      }
    case GET_COMPANIES:
      return { ...state, companies: action.payload };
    default:
      return state;
  }
};

export default companyReducer;