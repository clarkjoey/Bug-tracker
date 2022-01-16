const route = require('express').Router();
const bugModel = require('../../Model/bugModel');

// route for creating a bug
route.post('/create/:_id/:name/:details/:steps/:version/:priority/:assigned/:creator/:time', (req,res) => {
    bugModel.create(req.params).then((user) => {
        if(!user) return res.status(400).send('there was an error');
        res.send('created new bug');
    })
    .catch((err) => res.status(400).send(err))
});

// route for deleting a bug 
route.post('/delete/:_id', (req,res) => {
    bugModel.deleteOne(req.params).then((user) => {
        if(!user) return res.status(400).send('there was an error');
        res.send(`deleted existing bug ${req.params._id}`);
    })
    .catch((err) => res.status(400).send(err))
});

// get all bugs in the database
route.get('/', (req,res) => {
    bugModel.find().then((user) => {
        if(!user) return res.status(400).send('no bugs');
        res.send(user);
    })
    .catch((err) => {
        if(err) res.status(400).send(err)
    })
});

module.exports = route;