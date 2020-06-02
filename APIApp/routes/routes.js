//step 7 create routes
const express = require('express');
const routes = express.Router();
const userController = require('../Controllers/userController');

routes.get('/users',(req,res)=>{
    res.write('{data:"data"}');
    res.end();
});
routes.route('/users/:id').get((req,res)=>{
    console.log(req.params.id);
});
routes.route('/users/:id').delete();
routes.route('/users').post((req,res)=>{
    console.log(req.body);
    let user = new userController();
    let result = user.add(req.body);
    res.send(result);
});
routes.route('/users/:id').put((req,res)=>{
    console.log(`req.body is ${req.body}`);
    res.end();
});


module.exports = routes;