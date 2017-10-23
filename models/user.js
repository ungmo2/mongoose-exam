const mongoose = require('mongoose');

// Define Schemes
const userSchema = new mongoose.Schema({
  userid: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  }
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('User', userSchema);
