const serverless = require('serverless-http');
const express = require('express');
const router = express.Router();
const app = express();

// strip off the microservice's "type"
//  - to get to products & factories, you use:
//    - localhost:3000/widgets/products...
//    - localhost:3000/widgets/factories...
app.use('/widgets', router);

// set up routing
router.use('/products', require('./routers/products'));
router.use('/factories', require('./routers/factories'));

// 404
router.use((req, res, next) => {
  console.log('===== Path: ', req.path);
  return res.status(404).json({
    error: "Not Found, idiot!",
  });
});

// spin up normal express for local development/testing
//  - launch with `USE_LOCAL=true npm start`
if (process.env.USE_LOCAL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
};

module.exports.handler = serverless(app);
