var VRM = require('../models/vrm');

var VRMController = {

    Index: function(req, res, next) {
        VRM.find(function(err, vrms) {
           
            if (err) { throw err; }

            res.render('index', { title: 'VLU', vrms : vrms});

        });
    },

    Create: function(req, res, next) {
        var tidyVRM = req.body
        tidyVRM.vrm = tidyVRM.vrm.replace(/\s+/g, '').toUpperCase()
        console.log(tidyVRM);
        var query = new VRM( tidyVRM );
        
        console.log('Searching for ', query );
        
        query.save(function(err){
            if (err) { throw err;}

            console.log('Saved.')
            res.status(201).redirect('/');

        });
    }

}

module.exports = VRMController;