let express = require('express')

let app = express();

var user = {
    username:'bhadresh',
    password:'123',
    emailid:'bhadresh@dashtechinc.com'
}

app.get('/',(req,res)=>{
    res.send(user);
});

let server = app.listen(3000);