var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var schema = new Schema({
    loc: {
        type: { type: String }
        , coordinates: []
    }
});
schema.index({ loc: '2dsphere' });

var report = mongoose.model('reports', schema);

module.exports = {
    Report: report
};