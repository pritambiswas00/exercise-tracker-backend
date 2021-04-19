const express = require('express');

const router = express.Router();

const User = require('../models/users');


router.post('/register', async (req, res)=> {
    const userNameExist = await User.findOne({username: req.body.username});
    if(userNameExist){
        return res.status(400).send('The user already exist.')
    }

    const newUser = new User({
        name : req.body.name,
        username : req.body.username,
    })

    try{
       await newUser.save();
       res.status(200).json("User Registered");
    }catch(error){
      res.status(400).json(error)
    }

})

router.get('/', async (req, res)=> {
    const user = await User.find();
    if(!user) return res.status(400).send('No users Found');


     try{
        res.status(201).json(user);
     }catch(error){
         res.status(400).json(error);
     }
})

module.exports = router;