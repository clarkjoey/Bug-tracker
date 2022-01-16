const route = require('express').Router();
const userModel = require('../../Model/userModel');

// route for creating an account 
route.post('/create/:name/:password/:role', (req,res) => {
    userModel.create(req.params).then((user) => {
        if(!user) return res.status(400).send('there was an error');
        res.send('created new user');
    })
    .catch((err) => res.status(400).send(err))
});

// route for deleting an account 
route.post('/delete/:name/:password/:role', (req,res) => {
    userModel.deleteOne(req.params).then((user) => {
        if(!user) return res.status(400).send('there was an error');
        res.send(`deleted existing user ${req.params.name}`);
    })
    .catch((err) => res.status(400).send(err))
});

// searches users by id and updates a user's name, password, and role
route.put('/update/:_id/:name/:password/:role', (req,res) => {
    const {_id,name,password,role} = req.params;
    userModel.findByIdAndUpdate(_id,{name,password,role}).then((user) => {
        if(!user) return res.status(400).send('no user');
        res.send('updated user account')
    })
    .catch((err) => {
       if(err) res.status(400).send(err)
    })
});

// checks for existing user and password - returns true if there's a match
// used to login
route.post('/:name/:password', (req,res) => {
    userModel.findOne(req.params).then((user) => {
        if(!user) return res.status(400).send('incorrect email/password');
        res.cookie('user',user);
        res.send(true);
    })
    .catch((err) => {
        if(err) res.status(400).send(err)
    })
})

// get all users in the database
route.get('/', (req,res) => {
    userModel.find().then((user) => {
        if(!user) return res.status(400).send('no users');
        res.send(user);
    })
    .catch((err) => {
        if(err) res.status(400).send(err)
    })
});

module.exports = route;