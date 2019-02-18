const express = require('express');
const router = express.Router();
const Noob = require('../models/noob.js');
    router.get('/', (req, res) => {
        Noob.find({}, (err, allNoobs) =>{
            if(err){
              console.log(err);
              res.redirect('/');
            }
            else {
              res.render("home", {
                  title:"Welcome to codeCal | View Noobs",
                  noobs:allNoobs});
            }
          });
    });
module.exports = router;