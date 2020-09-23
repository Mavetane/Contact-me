import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import adminReducer from './adminReducer';

export const rootReducer = combineReducers({
  companies: companyReducer,
  admin: adminReducer
})

export default { rootReducer }