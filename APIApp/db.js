//need a connextion with mongodb compass

let mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/databaseusers',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
},(err)=>{
    if(err)
        console.log(`database connection error: ${err}`);
    else
        console.log('database connected');
});

module.exports = mongoose;