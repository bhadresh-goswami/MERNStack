let mongoose = require('mongoose')

//connection code-start
mongoose.connect('mongodb://localhost:27017/dbuser',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
let db = mongoose.connection;
db.on("error",console.error.bind(console, 'MongoDB connection error:'));

//connection code-end

//create schema in db document-start

let Schema = mongoose.Schema;
let userSchema = new Schema({

    userName:String,
    emailId:String,
    password:String,
    createdDate:Date,
    location:String

});

//create schema in db document-end

//Create Model variable for perform CRUD-start

let userModel = mongoose.model('users',userSchema);

//Create Model variable for perform CRUD-end

//model objects-start
let user1 = new userModel({
    userName:'dhaval',
    emailId:',dhaval@gmail.com',
    password:'123',
    createdDate:new Date(),
    location:'India'
});
// user1.save((err)=>{
//     if(err!=undefined)
//     {
//         console.log(err);
//     }
//     else{
//         console.log("Data Saved!");
//     }
// });
//model objects-end

//Search Data-start
userModel.find({'location':undefined},'emailId userName location',(err,data)=>{
    if(err!=undefined)
    {
        console.log('search failed! error: ' + err);
    }
    else{
        console.log(data);
    }
})
//Search Data-end

//remove the data-start 
let _id = '5ed1463cb70d5c06d8548c1e';
userModel.findOne({_id:_id},(err,res)=>{
    if(err!=undefined)
    {
        console.log(err)
    }
    else{
        console.log("Found at: "+res);
        res.emailId = "new";
        res.save();
    }
});
// if(user!=undefined)
// {
//     //console.log("user:"+user);
//     user.remove((err)=>{
//         if(err!=undefined)
//         {
//             console.log("Some Error in Delete: "+err);
//         }
//         else{
//             console.log("Deleted ");
//         }
//     })
// }

//update record
//console.log(user);

//remove the data-end 