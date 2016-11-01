var mongoose = require('mongoose'),
    Worker = mongoose.model('Worker');

module.exports = function(app) {
    app.get('/api', function(req, res, next) {
        Worker.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
            res.json(data);
        });
    });

    app.post('/api', function(req, res, next) {
        var worker = new Worker({
            fname: req.body.fname,
            lname: req.body.lname,
            nickname: req.body.nickname,
            gender: req.body.gender,
            cstatus: req.body.cstatus,
            cellphone: req.body.cellphone,
            telnumber: req.body.telnumber,
            bday: req.body.bday,
            age: req.body.age,
            emailadd: req.body.emailadd,
            homeaddress: req.body.homeaddress,
            profession: req.body.profession,
            company: req.body.company,
            talent: req.body.talent,
            medical: req.body.medical,
            elname: req.body.elname,
            efname: req.body.efname,
            relationship: req.body.relationship,
            econtact: req.body.econtact,
            dgroup: req.body.dgroup,
            dlname: req.body.dlname,
            dfname: req.body.dfname,
            dminitial: req.body.dminitial,
            dcontact: req.body.dcontact,
            dtype: req.body.dtype,
            dschedday: req.body.dschedday,
            dtime: req.body.dtime,
            dvenue: req.body.dvenue,
            apastor: req.body.apastor,
            dhandletype: req.body.dhandletype,
            dhandleday: req.body.dhandleday,
            dhandletime: req.body.dhandletime,
            dhandlevenue: req.body.dhandlevenue,
            oministry: req.body.oministry,
            pastministry: req.body.pastministry,
            trainingdate: req.body.trainingdate,
            firstduty: req.body.firstduty,
            clustername: req.body.clustername,
            segment: req.body.segment,
            segmenthead: req.body.segmenthead,
            segmentleader: req.body.segmentleader,
            time: req.body.time,
            htposition: req.body.htposition,
        });
        worker.save(function(err, data) {
            if(err) {
                return next(err);
            }
            res.status(201).json(data);
        });
    });

    app.get('/api/:id', function(req, res) {
        Worker.findById(req.params.id, function(err, data){
            res.json(data);
        });
    });

    app.delete('/api/:id', function(req, res) {
        Worker.findByIdAndRemove(req.params.id, function(err, data) {
            res.json(data);
        });
    });

    app.put('/api/:id', function(req, res, next) {
        Worker.findById(req.params.id, function(err, data) {
            data.fname = req.body.fname;
            data.lname = req.body.lname;
            data.nickname = req.body.nickname;
            data.updated = Date.now();
            data.save(function(err, data) {
                if(err) {
                    return next(err);
                }
                res.status(201).json(data);
            });
        });
    });
};