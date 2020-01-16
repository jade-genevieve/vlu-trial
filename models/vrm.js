var searches = [];

var VRM = function (vrm) {
    this.vrm = vrm;
};

VRM.prototype.save = function() {
    searches.push(this);
}

VRM.all = function() {
    return searches;
}

module.exports = VRM;