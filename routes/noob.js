const express = require('express');
const router = express.Router();
const Noob = require('../models/noob.js');

    router.get('/add', (req, res) => {
        res.render('add-noob', {
            title: "Welcome to codeCal | Add a noob",
            message: ''
        });
    });
    router.post('/add', (req, res) => {
        let message = '';
        let name = req.body.name;
        let availStart = req.body.availStart;
        let availEnd= req.body.availEnd;

        let newNoob = {name: name, availStart: availStart, availEnd: availEnd}
        Noob.create(newNoob, (err, newlyCreated) => {
            if(err){
                console.log(err);
            }
            else{
                console.log(newlyCreated);
                res.redirect('/');
            }
        });
        
    });
    router.get('/edit/:id', (req, res) => {
        let noobId = req.params.id;
        
        Noob.findById(noobId).exec((err, ret) =>{
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-noob', {
                title: "Edit Noob",
                noobs: ret,
                message: ''
            });
        });
    });
    router.post('/edit/:id', (req, res) => {
        let noobId = req.params.id;

        Noob.findByIdAndUpdate(noobId, req.body).exec((err, ret) =>{
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    });
    router.get('/delete/:id', (req, res) => {
        let noobId = req.params.id;

        Noob.findByIdAndRemove(noobId, req.body).exec((err, ret) =>{
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    });
module.exports = router;