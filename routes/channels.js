const express = require('express');
const router = express.Router();
const services = require('../services');

//Channels management
router.get('/', services.channel.getAll);
router.get('/:id', services.user.checkPassport, services.channel.getOne);
router.post('/', services.user.checkPassport, services.channel.addOne);
router.delete('/:id', services.user.checkPassport, services.channel.deleteOne);

module.exports = router;
