let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

var users = 
[
    {
        username:'bhadresh',
        password:'123',
        emailid:'bhadresh@dashtechinc.com'
    },
    {
        username:'mahlet',
        password:'321',
        emailid:'mahlet@gmail.com'
    }
]


var techs = 
[
    {
        tech:'node js',
        rating:'4.0/5.0'
    },
    {
        
        tech:'express js',
        rating:'4.5/5.0'
    },
    {
        
        tech:'react js',
        rating:'4.0/5.0'
    }
]

app.route('/users').get((req,res)=>{
    res.send(users);
})
app.route('/users').post((req,res)=>{
    console.log("post is executed!"+ req.body);

    res.send(req.body);
})
app.route('/users/:name').delete((req,res)=>{
    if(req.params.name==undefined){
        res.send(`name Params not found!`);
            return;
    }
    users.forEach(element => {
        if(element.username.toLowerCase() == req.params.name.toLowerCase())
        {
            res.send(`Found and Delete Record for ${req.params.name}!`);            
            return;
        }
    });
    res.send(`Not Found Record for ${req.params.name}!`);
})

app.route('/techs').get((req,res)=>{
    res.send(techs);
})

app.get('/',(req,res)=>{
    res.send('express api is in use!');
});

let server = app.listen(3000);