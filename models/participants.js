var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var participants = new Schema({
  name:     { type: String },
  },
  {versionKey: false }
);


module.exports = mongoose.model('participants', participants);