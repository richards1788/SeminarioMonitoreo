const router = require('express').Router();
const controllertest = require('./controllers');

router.post('/insert', controllertest.postMonitoreo);

module.exports = router;
