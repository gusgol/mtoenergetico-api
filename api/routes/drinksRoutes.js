'use strict';
module.exports = function(app) {
  var drinksList = require('../controllers/drinksController');

  app.route('/drinks')
    .get(drinksList.list_all_drinks)
    .post(drinksList.create_a_drink);

  app.route('/drinks/:drinkId')
    .get(drinksList.read_a_drink)
    .put(drinksList.update_a_drink)
    .delete(drinksList.delete_a_drink);
};
