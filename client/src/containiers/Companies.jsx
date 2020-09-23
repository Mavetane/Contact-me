import React from 'react';
import { useSelector } from 'react-redux';

function Companies () {
  const companies = useSelector(state => state.companies.companies);

  const list = () => companies.map(company => <div key={company._id}>
    <h2>{company.name}</h2>
    <h4>{company.mobileNo}</h4>
    <h4>{company.email}</h4>
    <h4>{company.website}</h4>
    <p>{company.physicalAddress}</p>

  </div>)

  return (
    <div className="companies">
      <h1>Registered Companies</h1>
      {list()}
    </div>
  )
}

export default Companies
