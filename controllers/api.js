'use strict';

exports.customers = (req, res, next) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
    { id: 3, firstName: 'Mary', lastName: 'Smith' }
  ];

  res.json(customers);
};
