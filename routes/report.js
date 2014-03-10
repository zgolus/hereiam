var Report = require('../models/report').Report;
var mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;

exports.index = function(req, res){
    Report.find({}, function(err, result) {
        res.json(200, {reports: result});
    });
};

exports.show = function(req, res){
    console.log(req.params.report);
    Report.findOne({_id: new ObjectId(req.params.report)}, function(err, result){
        res.json(200, {report: result})
    });
}

exports.create = function(req, res){
    var report = new Report(req.body);
    report.save(function(err){
        console.log(err);
    });
    res.json(req.body);
};

exports.destroy = function(req, res){
//    Report.destroy()
}