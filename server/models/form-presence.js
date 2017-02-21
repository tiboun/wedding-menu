var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var formPresenceSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  present: { type: Boolean, required: true },
  created_at: Date,
  updated_at: Date
});

formPresenceSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// the schema is useless so far
// we need to create a model using it
var FormPresence = mongoose.model('Form', formPresenceSchema);

// make this available to our users in our Node applications
module.exports = FormPresence;
