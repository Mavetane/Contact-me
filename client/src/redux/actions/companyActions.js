import axios from 'axios';

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