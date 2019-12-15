//Request Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    startDate : Date,
    endDate : Date,
    minCount : Number,
    maxCount : Number
});

var Request = mongoose.model('Request',requestSchema);

module.exports = Request;

