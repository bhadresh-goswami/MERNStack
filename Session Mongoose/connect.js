var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/dbusers';
mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//create model schema
var userSchema = new Schema({
    username:String,
    password:String,
    emailid:String,
    createdDate:Date
});

//create model from schema
var userModel = mongoose.model("Users",userSchema);

//save data
var userObj1 = new userModel({
    
    username:"bhadresh",
    password:"bhadresh@123",
    emailid:"bhadresh@dashtechinc.com",
    createdDate:new Date()
});


var userObj2 = new userModel({
    
    username:"dhaval",
    password:"dhaval@123",
    emailid:"dhaval@dashtechinc.com",
    createdDate:new Date()
});

var userObj3 = new userModel({
    
    username:"ravi",
    password:"ravi@123",
    emailid:"ravi@dashtechinc.com",
    createdDate:new Date()
});

// userObj1.save(function(err){
//     if(err!=undefined)
//     console.log(err)
//     else
//     console.log("Saved!")
// });
// userObj2.save(function(err){
//     if(err!=undefined)
//     console.log(err)
//     else
//     console.log("Saved!")
// });
// userObj3.save(function(err){
//     if(err!=undefined)
//     console.log(err)
//     else
//     console.log("Saved!")
// });

// userModel.create(
//     userObj,
//     function (err,data){
//         if(err!=undefined)
//         {
//             console.log(err);
//         }
//         else{
//             console.log(data);
//         }
//     }
// )


//search record
userModel.find({'username':'bhadresh'},'username emailid',function(err,model){
    if(err!=undefined)
    {
        console.log(err);
    }
    else{
        //updates
        // var updateModel = model[0];
        // updateModel.emailid = "a@a.com";
        // updateModel.save(function(err){
        //     if(err!=undefined)
        //     {
        //         console.log(err);
        //     }
        //     else{
        //         console.log("Updated!");
        //     }
        // })
        // console.log(model);

        //delete
        var updateModel = model[0];
        updateModel.remove(function(){
            if(err)
            {
                console.log(err)
            }
            else{
                console.log("Removed!");
            }
        })
    }
})

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))