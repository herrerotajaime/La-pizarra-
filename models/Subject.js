const mongoose = require('mongoose');
const { Schema }   = mongoose;

const subjectSchema = new Schema({
  title: String,
  description: String,
  pupils: [{type: new Schema.type.ObjectId, ref: 'User'}],
  theachers: [{type: new Schema.type.ObjectId, ref: 'User'}],
  icon: String

});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;