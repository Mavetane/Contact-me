import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import LandingPage from './containiers/LandingPage';
import { getCompanies } from './redux/actions/companyActions';
import { getEnquiries } from './redux/actions/adminActions'
import { loadRoutes } from './routes/index';
import history from './routes/history'


function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCompanies())
    dispatch(getEnquiries())
  }, [])
  function refreshPage () {
    window.location.reload();
  }
  const navigatePage = (routeName) => {
    history.push(routeName)
    refreshPage()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Me</h1>
        <a onClick={() => navigatePage('admin')}>Admin site</a>
      </header>
      {/* <LandingPage /> */}
      {loadRoutes()}

    </div>
  );
}

export default App;
