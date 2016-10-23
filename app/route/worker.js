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
            lname: req.body.lname
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