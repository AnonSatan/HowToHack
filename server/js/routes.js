(function () {
    "use strict";
    var express = require('express'),
        router = express.Router(),
        Tools = require('./toolModel');

    Tools.methods(['get', 'put', 'post', 'delete']);
    Tools.register(router, '/tools');

    module.exports = router;
}());

