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
            htposition: req.body.htposition
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
            data.gender = req.body.gender;
            data.cstatus = req.body.cstatus;
            data.cellphone = req.body.cellphone,
            data.telnumber = req.body.telnumber,
            data.bday = req.body.bday,
            data.age = req.body.age,
            data.emailadd = req.body.emailadd,
            data.homeaddress = req.body.homeaddress,
            data.profession = req.body.profession,
            data.company = req.body.company,
            data.talent = req.body.talent,
            data.medical = req.body.medical,
            data.elname = req.body.elname,
            data.efname = req.body.efname,
            data.relationship = req.body.relationship,
            data.econtact = req.body.econtact,
            data.dgroup = req.body.dgroup,
            data.dlname = req.body.dlname,
            data.dfname = req.body.dfname,
            data.dminitial = req.body.dminitial,
            data.dcontact = req.body.dcontact,
            data.dtype  = req.body.dtype,
            data.dschedday = req.body.dschedday,
            data.dtime = req.body.dtime,
            data.dvenue = req.body.dvenue,
            data.apastor = req.body.apastor,
            data.dhandletype = req.body.dhandletype,
            data.dhandleday = req.body.dhandleday,
            data.dhandletime = req.body.dhandletime,
            data.dhandlevenue = req.body.dhandlevenue,
            data.oministry = req.body.oministry,
            data.pastministry = req.body.pastministry,
            data.trainingdate = req.body.trainingdate,
            data.firstduty = req.body.firstduty,
            data.clustername = req.body.clustername,
            data.segment = req.body.segment,
            data.segmenthead = req.body.segmenthead,
            data.segmentleader = req.body.segmentleader,
            data.time = req.body.time,
            data.htposition = req.body.htposition,

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