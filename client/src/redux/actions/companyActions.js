import axios from 'axios';
import { ADD_COMPANY } from './actionTypes';

export const getCompanies = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('http://localhost:6005/companies');
      console.log('data', data)
      dispatch({ type: "GET_COMPANIES", payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}



export const registerCompany = (formInfo) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:6005/company/register', { ...formInfo })
      console.log("data", data)
      dispatch({ type: ADD_COMPANY, payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}
