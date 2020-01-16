var express = require('express');
var router = express.Router();
var VRM = require('../models/vrm.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VLU', vrms : VRM.all()});
});

/* POST search new VRM. */
router.post('/vrms', function(req, res, next) {
    var tidyVRM = req.body.vrm.replace(/\s+/g, '').toUpperCase()
    var query = new VRM( tidyVRM );
    console.log(query);
    query.save();
    res.status(201).redirect('/');
  });

/* GET vrms listing. */
router.get('/', function(req, res, next) {
  res.render('vrms/index', { vrms : VRM.all() });
});


module.exports = router;