const express = require('express');
const { login, getCompanies, toggleTarget } = require('../controllers/accountController');

const router = express.Router();

router.post('/login', login);
router.get('/companies', getCompanies);
router.post('/toggle-target', toggleTarget);

module.exports = router;
