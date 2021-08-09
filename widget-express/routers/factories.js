const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
  return res.status(200).json({
    message: `This is factory id ${req.params.id}!`
  });
});

module.exports = router;
