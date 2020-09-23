import { ADD_ADMIN, GET_ENQUIRIES } from '../actions/actionTypes'

const initialState = {
  admin: null,
  enquiries: [],

};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADMIN:
      return {
        ...state, queries: action.payload
      }
    case GET_ENQUIRIES:
      return { ...state, queryData: action.payload };
    default:
      return state;
  }
};

export default adminReducer;