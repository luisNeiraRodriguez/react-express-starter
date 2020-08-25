'use strict';

const express = require('express');

const app = express();

const apiRoutes = require('./routes/api');

// routes
app.use('/api', apiRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
