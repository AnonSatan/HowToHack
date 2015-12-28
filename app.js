(function () {
    "use strict";

    var express = require('express'),
        app = express();
    app.use(express.static('public'));
    app.use(express.static('node_modules'));
    app.use(express.static('templates'));

    app.all('/*', function (req, res) {
        console.log(req.path);
        res.sendFile('index.html', {root: __dirname});
    });

    app.listen(3000, function () {
        console.log('Express server listening on port 3000...');
    });
}());