var lodash = require('lodash');
var mymodule = require('./modules/my-module');
var http = require('http');


var data = {
    name:"bhadresh",
    tech:"nodejs"
}

http.createServer(function(req,res){
    console.log("running in localhost:8080!");
    res.writeHead(200,{'content-type':'text/json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080);

//var fs = require('./modules/filesys');
// console.log('this is my demo app!\n');

// var number = lodash.random(1,33);

// console.log(number);

// console.log(mymodule.myfunction());
// fs.readFrom('./contents/names.json');

// fs.writeTo("./contents/mydata.json",JSON.stringify(data));
