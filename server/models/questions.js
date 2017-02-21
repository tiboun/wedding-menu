var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var questionsSchema = new Schema({
  vin_rouge: Boolean,
  vin_blanc: Boolean,
  eau_plate: Boolean,
  eau_gazeuse: Boolean,
  jus_fruit: Boolean,
  coca: Boolean,
  fromage: Boolean,
  vehicule: Boolean,
  vehicule_nb_place: Number,
  covoiturage_coordonnees: String,
  covoiturage_nom_prenom: String,
  created_at: Date,
  updated_at: Date
});

questionsSchema.pre('save', function(next) {
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
var Questions = mongoose.model('Questions', questionsSchema);

// make this available to our users in our Node applications
module.exports = Questions;
