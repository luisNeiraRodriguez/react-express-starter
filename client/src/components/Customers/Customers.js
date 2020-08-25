import React from 'react';
import './Customers.css';

import useFetch from '../../hooks/useFetch';

const Customers = () => {
  const customers = useFetch('/api/customers');

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
