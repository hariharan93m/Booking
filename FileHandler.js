var userWorker=require('./Fileworker');
exports.getHtml= function(req, res) {
	res.render("index");
};

exports.getData = function(req,res){
	userWorker.getValues(function(err,resultData){
		if (err) {
			res.jsonp("error");
		} else {
			res.jsonp(resultData);
		}
		
	});
};

exports.insertData = function(req,res){
	var Reqbody=[];
	Reqbody=req.query['value'];
	userWorker.insertValues(function(err,resultData){
		if (err) {
			res.jsonp("This error");
		} else {
			res.jsonp(resultData);
		}
		
	},Reqbody);
};