var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var couponSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  tarte_magret_fume: Boolean,
  tartare_saumon: Boolean,
  tatin_legumes: Boolean,
  pintade: Boolean,
  boeuf: Boolean,
  lasagnes: Boolean,
  pizza: Boolean,
  created_at: Date,
  updated_at: Date
});

couponSchema.pre('save', function(next) {
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
var Coupon = mongoose.model('Coupon', couponSchema);

// make this available to our users in our Node applications
module.exports = Coupon;
