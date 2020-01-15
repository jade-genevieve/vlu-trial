var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VLU', vrms : vrms});
});


var vrms = [];

/* POST search new VRM. */
router.post('/vrms', function(req, res, next) {
    var query = { vrm: req.body.vrm.replace(/\s+/g, '').toUpperCase() };
    console.log(query);
    vrms.push(query);
    console.log(vrms)
    res.status(201).redirect('/');
  });

/* GET vrms listing. */
router.get('/', function(req, res, next) {
  res.render('vrms/index', { vrms : vrms });
});


module.exports = router;