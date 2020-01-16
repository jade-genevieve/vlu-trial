var mongoose = require('mongoose');

var VRMSchema = new mongoose.Schema({
    vrm: String
})

var VRM = mongoose.model('VRM', VRMSchema);

module.exports = VRM;