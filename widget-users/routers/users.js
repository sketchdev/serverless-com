const express = require('express');
const router = express.Router();

router.get('/:username', async (req, res) => {
  return res.status(200).json({
    message: `Hello user ${req.params.username}!`
  });
});

module.exports = router;
