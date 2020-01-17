var VRM = require('../models/vrm');
const { parsedAPIResponse } = require('../utils/call-jarvis/index.js');

var VRMController = {


    Index: function(req, res, next) {
        VRM.find(function(err, vrms) {
           
            if (err) { throw err; }

            res.render('index', { title: 'VLU', vrms : vrms});

        });
    },

    Create: async function(req, res, next) {
        var searchedVRM = req.body
        searchedVRM.vrm = searchedVRM.vrm.replace(/\s+/g, '').toUpperCase()
        console.log("got body", searchedVRM.vrm);

        //check db for existing search
        
        //call CDL with searched VRM
        console.log("Calling 3rd party API...")
        searchedVRM.data = await parsedAPIResponse(searchedVRM.vrm, function(err, data){
            if(err){
                res.json(err);
            }
            console.log("Data received")
            res.json({})
        });



        console.log("Preparing to save to database", searchedVRM);
        var query = new VRM( searchedVRM );         
        query.save(function(err){
            if (err) { throw err;}

            console.log('Saved.')
            res.status(201).redirect('/');
        });
    }

}

module.exports = VRMController;