import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import LandingPage from './containiers/LandingPage';
import { getCompanies } from './redux/actions/companyActions';

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCompanies())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Me</h1>
        <a>Admin site</a>
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
