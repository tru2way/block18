var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));


app.get( '/', function(req,res){
	console.log( 'In root');
	res.write( 'Welcome to Redhat OpenShift on IBM Cloud!!!');
	res.end();
});


app.listen( 3000, 'localhost', function(){
	console.log( 'Server started...');
});