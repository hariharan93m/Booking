var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test');

var user_schema = new mongoose.Schema({
	SeatNo : Number,
	Name : String,
	Gender : String,
	Booking : Number,
}, {
	collection : "booking"
});

var userModel = mongoose.model("booking", user_schema);
exports.getValues = function(mycallback) {
	userModel.find({}, function(err, rd) {
		mycallback(err,rd);
	});
};

exports.insertValues = function(mycallback,Reqbody) {
	var val=Reqbody;
	console.log(val);
	var value=++val;
	console.log(value);
	userModel.update({"SeatNo":value},{ $set: { Booking: 1 }},function(err, rd) {
		mycallback(err,rd);
	});
};