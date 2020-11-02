import React from 'react';
import Currency from '../currency/currency';
import Stock from '../stock/stock';
import Company from '../company/company'

import './finance.css'

function Finance() {
  return (
    <div className="finanse-container">
      <Stock />
      <Currency />
      <Company />
    </div>
  )
}

export default Finance
