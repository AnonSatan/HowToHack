var express = require('express');

var app = express();

app.set('view options', {
    layout: false
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/templates'));

app.get('/', function (req, res) {
    "use strict";
    res.render('index.html');
});

app.get('*', function (req, res) {
    "use strict";
    res.redirect('/');
});

app.listen(3000, function () {
    "use strict";
    console.log('Express server listening on port 3000...');
});