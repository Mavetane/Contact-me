import axios from 'axios';
import { ADD_ADMIN } from './actionTypes';


export const signup = (formInfo) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:6005/admin/signup', { ...formInfo })
      console.log("data", data)
      dispatch({ type: ADD_ADMIN, payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}


export const signin = (formInfo) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:6005/admin/signin', formInfo)
      dispatch({ type: ADD_ADMIN, payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}


export const getEnquiries = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('http://localhost:6005/users');
      console.log('data', data)
      dispatch({ type: "GET_ENQUIRIES", payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}


