var mongoose = require('mongoose');

var workerSchema = mongoose.Schema({
    fname: String,
    lname: String,
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Worker = mongoose.model('Worker', workerSchema);

function createDefaultWorkers() {
    Worker.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Worker.create({fname: 'Blessina', lname: 'Nissi'});
            Worker.create({fname: 'Vivin', lname: 'Antony'});
        }
    })
}

exports.createDefaultWorkers = createDefaultWorkers;