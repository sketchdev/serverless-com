const express = require('express');
const router = express.Router();

router.get('/:productId', async (req, res) => {
  return res.status(200).json({
    message: `Hello from product ${req.params.productId}!`
  });
});

module.exports = router;
