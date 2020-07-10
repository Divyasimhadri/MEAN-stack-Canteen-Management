const express=require('express');
const mongoose=require('mongoose');

const jwt = require('jsonwebtoken')
const food=require('../models/food');
const user = require('../models/user');

const db='mongodb+srv://divya:divya@cluster0-ugamt.mongodb.net/canteen?retryWrites=true&w=majority';

const router=express.Router();

mongoose.Promise=global.Promise;

mongoose.connect(db, { useNewUrlParser: true ,useUnifiedTopology: true })
.catch(error => console.error('Error !!' +error));


router.get('/food',verifyToken,function(req,res){
    console.log('Get request for all Food Items');
    food.find({})
    .exec(function(err,food){
        if(err)
        {
            console.log("Error Retrieving Food Items");
        }
        else
        {
            res.json(food);
        }
    });
});
router.get('/food/:id',function(req,res){
    console.log('Get request for a single Food');
    food.findById(req.params.id)
    .exec(function(err,food){
        if(err)
        {
            console.log("Error Retrieving Fooditem");
        }
        else
        {
            res.json(food);
        }
    });
});


router.post('/food',function(req,res){
    console.log('add a Food item');
    var newFood = new food();
    newFood.name=req.body.name;
    newFood.price=req.body.price;
    newFood.save(function(err,insertedFood){
        if(err)
        {
            console.log('Error Saving Food Item');
        }
        else
        {
            res.json(insertedFood);
        }
    });
});
router.post('/register',function(req,res){
    console.log('adding a new user');
    var newUser = new user();
    newUser.email=req.body.email;
    newUser.password=req.body.password;
    newUser.save(function(err,insertedUser){
        if(err)
        {
            console.log('Error Saving Food Item');
        }
        else
        {
            let payload={subject:insertedUser._id}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        
        }
    });
});

router.post('/login',function(req,res){
    let UserData=req.body;
    user.findOne({email:UserData.email},(error,user)=>{
        if(error)
        {
            console.log(error);
        }
        else
        {
            if(!user)
            {
                res.status(401).send('Invalid Email');
            }
            else
            {
                if(user.password!==UserData.password)
                {
                    res.status(401).send('Invalid password');
                }
                else
                {
                    let payload={subject:user._id}
                    let token=jwt.sign(payload,'secretKey')
                    res.status(200).send({token});
                }
            }
        }
    });
});

router.put('/food/:id',function(req,res){
    console.log('Update a Food item');
    food.findByIdAndUpdate(req.params.id,
        {
            $set:{

                name:req.body.name,
                price:req.body.price
            }
        },
        {
            new:true
        },
        function(err,updatedFood){
            if(err)
            {
                res.send('Error updating a Fooditem');
            }
            else
            {
                res.json(updatedFood);
            }
        });
});

router.delete('/food/:id',function(req,res){
    console.log('Deleting a Food Item');
    food.findByIdAndRemove(req.params.id,function(err,deletedFood){
        if(err)
        {
            res.send('Error deleting a FoodItem');
        }
        else
        {
            res.json(deletedFood);
        }
    });
});

function verifyToken(req,res,next)
{
    if(!req.headers.authorization)
    {
        return res.status(401).send('Unauthorized request')
    }
    let token=req.headers.authorization.split(' ')[1].toString()
    if(token==='null')
    {
        return res.status(401).send('Unauthorised Request')
    }
    let payload=jwt.verify(token,'secretKey')
    if(!payload)
    {
        return res.status(401).send('Unauthorised Request')
    }
    req.userId=payload.subject 
    next()
}
module.exports=router;