var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Name of the drink'
  },
  brand: {
    type: String,
    required: 'Brand of the drink'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Drinks', TaskSchema);
