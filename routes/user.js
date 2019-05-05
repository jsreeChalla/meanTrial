var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/UserDetails.js');


router.get('/', function(req, res, next) {
  User.find(function (err, products) {
    if (err) {
      return next(err);}
    else{
      console.log(products)
    res.send(products);
    }
  });
});

router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* DELETE  */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
