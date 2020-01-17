var mongoose = require('mongoose');

var VRMSchema = new mongoose.Schema({
    vrm: String,
    data: Object,
})

var VRM = mongoose.model('VRM', VRMSchema);

module.exports = VRM;