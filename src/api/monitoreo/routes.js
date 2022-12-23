const router = require('express').Router();
const controllertest = require('./controllers');

router.post('/:tem/:hum', controllertest.postMonitoreo);

module.exports = router;
