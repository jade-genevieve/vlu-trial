var mongoose = require('mongoose');

// var searches = [];

var VRMSchema = new mongoose.Schema({
    vrm: String
})

// var VRM = function (vrm) {
//     this.vrm = vrm;
// };

// VRM.prototype.save = function() {
//     searches.push(this);
// }

// VRM.all = function() {
//     return searches;
// }
var VRM = mongoose.model('VRM', VRMSchema);

module.exports = VRM;