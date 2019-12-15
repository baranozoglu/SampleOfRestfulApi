//include express framework
const express = require('express');
const app = express();
//include mongoose to use mongoDB easily
var mongoose = require('mongoose');
//include request and record schemas from other files
var Request = require('./request');
var Record = require('./records');
//to use json object 
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});

// support parsing of application/json type post data
app.use(bodyParser.json());

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
})


//The endpoint handle HTTP POST requests.
app.post('/getir',urlEncodedParser,function(request,response,next){
    var request1 = new Request({
        startDate:JSON.stringify(request.body.startDate),
        endDate: JSON.stringify(request.body.endDate),
        minCount: JSON.stringify(request.body.minCount),
        maxCount: JSON.stringify(request.body.maxCount)
    });
    //mongoDB connection
    var db = mongoose.connect('mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study',
    {useUnifiedTopology: true, useNewUrlParser: true},function(error){ 
       response.end("Something went wrong");
    });

    Record.aggregate([
        {
            "$group": {
                _id:{
                    key: "$key",                    
                    createdAt: "$createdAt",
                    totalCount: { "$sum": "$counts" }
                }                
            }
        },
        {$match : {'_id.totalCount':{ $gt:request1.minCount,$lt:request1.maxCount},'_id.createdAt': { $gt:request1.startDate , $lt:request1.endDate}}},
        {$sort : {'_id.createdAt':1,'_id.totalCount': -1}}
    ], function (err, result) {        
        response.setHeader('Content-Type', 'application/json');
        response.json({
            'status': 0,
            'message': "Response successfully",
            'records': result
        });
    }).catch(next);
});
//server must listen with port number

module.exports = app