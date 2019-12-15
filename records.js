//Records Schema
var mongoose = require('mongoose');
mongoose.set('debug', true);

var Schema = mongoose.Schema;

var recordSchema = new Schema({
    key:String,
    createdAt:Date,
    totalCount:Number
});

var Record = mongoose.model('Record',recordSchema);

module.exports = Record;