const router = require('express').Router();
const controllertest = require('./controllers');

router.post('/insert', controllertest.postMonitoreo);
router.get('/get', controllertest.getMonitoreo);

module.exports = router;
