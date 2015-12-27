(function () {
    "use strict";

    var express = require('express'),
        app = express();
    app.use(express.static('public'));
    app.use(express.static('node_modules'));
    app.use(express.static('templates'));

    app.get('*', function (req, res) {
        res.redirect('/');
    });

    app.listen(3000, function () {
        console.log('Express server listening on port 3000...');
    });
}());