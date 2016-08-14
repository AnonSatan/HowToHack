(function () {
    "use strict";
    var restful = require('node-restful'),
        mongoose = restful.mongoose,
        toolSchema = new mongoose.Schema({
            name: String,
            url: String,
            description: String
        });
    module.exports = restful.model('Tools', toolSchema);
}());