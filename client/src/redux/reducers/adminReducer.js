import { ADD_ADMIN, GET_ENQUIRIES, HANDLE_AUTH } from '../actions/actionTypes'

const initialState = {
  admin: null,
  enquiries: [],
  auth: false

};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADMIN:
      return {
        ...state, queries: action.payload
      }
    case GET_ENQUIRIES:
      return { ...state, queryData: action.payload };
    case HANDLE_AUTH:
      return { state, auth: action.payload }
    default:
      return state;
  }
};

export default adminReducer;