var express = require('express');
var router = express.Router();
var VRMController = require('../controllers/vrm_controller');

router.get('/', VRMController.Index);
router.post('/vrms', VRMController.Create);


module.exports = router;