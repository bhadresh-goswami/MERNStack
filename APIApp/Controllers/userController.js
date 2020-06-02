const userModel = require('../Models/userSchema');
const mongoose = require('mongoose');

class userController
{
    add(data) {
        if(data!=undefined && data!=null)
        {
            let user = new userModel({
                userName:data.userName,
                userEmailId:data.userEmailId,
                userPassword:data.userPassword,
                createdDate:new Date(),
                location:data.location
            });    
            user.save((err)=>{
                if(err)
                {
                    return `error in save: ${err}`;
                }
                else{
                    return 'data saved!';
                }
            })
        }
        else{
            console.log('data not found');
        }
    }
}

module.exports = userController;