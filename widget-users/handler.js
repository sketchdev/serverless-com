const serverless = require('serverless-http');
const express = require('express');
const app = express();

// set up routing
app.use('/users', require('./routers/users'));

app.use((req, res, next) => {
  console.log('===== Path: ', req.path);
  return res.status(404).json({
    error: "No user service found matching that URL.",
  });
});

// spin up normal express for local development/testing
//  - launch with `USE_LOCAL=true npm start`
if (process.env.USE_LOCAL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
};

module.exports.handler = serverless(app);
