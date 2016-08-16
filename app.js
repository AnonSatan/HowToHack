(function () {
    "use strict";

    var express = require('express'),
        mongoose = require('mongoose'),
        bodyParser = require('body-parser'),
        app = express();
    mongoose.Promise = global.Promise;
    app.use(express.static('public'));
    app.use(express.static('server'));
    app.use(express.static('node_modules'));
    app.use(express.static('templates'));

    app.use(bodyParser.urlencoded({'extended': 'true'}));
    app.use(bodyParser.json());
    app.use('/api', require('./server/js/routes'));

    mongoose.connect('mongodb://10.0.0.8:27017/test');
    app.all('/!*', function (req, res) {
        res.sendFile('index.html', {root: __dirname + '/public'});
    });
    app.listen(3000, function () {
        console.log('Express server listening on port 3000...');
    });
}());