import axios from 'axios';
import { ADD_ENQUIRY } from './actionTypes';

export const sendEnquiry = (formInfo) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:6005/user', { ...formInfo })
      console.log("data", data)
      dispatch({ type: ADD_ENQUIRY, payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}