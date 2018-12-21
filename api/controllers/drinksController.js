'use strict';


var mongoose = require('mongoose'),
  Drink = mongoose.model('Drinks');

exports.list_all_drinks = function(req, res) {
  Drink.find({}, function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};

exports.create_a_drink = function(req, res) {
  var new_drink = new Drink(req.body);
  new_drink.save(function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};

exports.read_a_drink = function(req, res) {
  Drink.findById(req.params.drinkId, function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};

exports.update_a_drink = function(req, res) {
  Drink.findOneAndUpdate({_id: req.params.drinkId}, req.body, {new: true}, function(err, drink) {
    if (err)
      res.send(err);
    res.json(drink);
  });
};

exports.delete_a_drink = function(req, res) {
  Drink.remove({
    _id: req.params.drinkId
  }, function(err, drink) {
    if (err)
      res.send(err);
    res.json({ message: 'Drink successfully deleted' });
  });
};
