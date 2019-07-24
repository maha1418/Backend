const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true,
  
  },
  major: {
    type: String,
    required: true
  },
file: {
type: Object
}
});

module.exports = User = mongoose.model('user', UserSchema);
