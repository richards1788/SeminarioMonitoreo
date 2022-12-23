//Exports all endpoints of availability
const express = require('express');
const genericRoutes = express.Router();

const monitoreo = require('./monitoreo');

genericRoutes.use('/monitoreo', monitoreo);

module.exports = genericRoutes;
