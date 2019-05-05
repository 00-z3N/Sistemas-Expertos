const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/plan', (req, res) => {
  res.render('plan');
});

module.exports = router;
