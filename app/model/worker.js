var mongoose = require('mongoose');
    // autoIncrement = require('mongoose-auto-increment');
    
var workerSchema = mongoose.Schema({
        // idworker: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'idworker'
    // },
    fname: String,
    lname: String,
    nickname: String,
    gender: String,
    cstatus: String,
    cellphone: Number,
    telnumber: Number,
    bday: {
        type: Date
    },
    age: Number,
    emailadd: String,
    homeaddress: String,
    profession: String,
    company: String,
    talent: String,
    medical: String,
    elname: String,
    efname: String,
    relationship: String,
    econtact: Number,
    dgroup: [{
        id: Number,
        name:String
    }],
    dlname: String,
    dfname: String,
    dminitial: String,
    dcontact: Number,
    dtype: {
        id: Number,
        name: String
    },
    dschedday: {
        id: Number,
        name: String
    },
    dtime:{
        type: Date
    },
    dvenue: String, 
    apastor: String,
    dhandletype: String,
    dhandleday: String,
    dhandletime:{
        type: Date
    },
    dhandlevenue: String,
    oministry: String,
    pastministry: String,
    trainingdate: {
        type: Date
    },
    firstduty: {
        type: Date
    },
    clustername: String,
    clusterhead: String,
    segment: String,
    segmenthead: String,
    segmentleader: String,
    time: {
        type: Date
    },
    htposition: String,
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// workerSchema.plugin(autoIncrement.plugin, 'idworker');
var Worker = mongoose.model('Worker', workerSchema);

// function createDefaultWorkers() {
//     Worker.find({}).exec(function(err, collection) {
//         if(collection.length === 0) {
//             Worker.create({fname: 'Blessina', lname: 'Nissi'});
//             Worker.create({fname: 'Vivin', lname: 'Antony'});
//         }
//     })
// }

// exports.createDefaultWorkers = createDefaultWorkers;