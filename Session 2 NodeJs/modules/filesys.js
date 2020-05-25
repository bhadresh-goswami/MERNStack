var fs = require('fs');//file system

var filesys = {
    writeTo:function (filename, data){
        var file = fs.writeFile(filename,data,(err)=>{
            if(err!=undefined)
            {
                console.log('got an error: \n' + err);
                return;
            }
            console.log('write file success!');
        });
        //fs.close(file);
    },
    readFrom:function (filename){
        var file = fs.readFile(filename,'utf-8',(err,data)=>{
            if(err==undefined)
            {
                console.log('got data: \n' + data);
                return;
            }
            console.log("got an error : \n"+err);
        });
        
        //fs.close(file);
    }
};

module.exports = filesys;