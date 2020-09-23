import React from 'react';
import { useSelector } from 'react-redux';

function Companies () {
  const companies = useSelector(state => state.companies.companies);

  const list = () => companies.map(company => <div key={company._id}>
    <h1>{company.name}</h1>
  </div>)

  return (
    <div className="companies">
      <h1>Registered Companies</h1>
      {list()}
    </div>
  )
}

export default Companies
