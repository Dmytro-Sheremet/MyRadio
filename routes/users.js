const express = require('express');
const router = express.Router();
const services = require('../services');

//User management
router.post('/register', services.user.Register);
router.post('/login', services.user.Login);
router.get('/current', services.user.checkPassport, services.user.Current);
router.get('/test', services.user.checkPassport, (req, res) =>
	res.json({ msg: '/Test works !' })
);

module.exports = router;
