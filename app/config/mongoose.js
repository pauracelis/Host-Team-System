var mongoose = require('mongoose'),
    workerModel = require('../model/worker');

mongoose.connect('mongodb://localhost:27017/htsystem');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db not connected...'));
db.once('open', function callback() {
    console.log('(htsystem) db opened');
});

// workerModel.createDefaultWorkers();