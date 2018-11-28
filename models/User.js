const mongoose = require('mongoose');
const { Schema }   = mongoose;

const userSchema = new Schema({
  profilePicture:String,
  username: String,
  password: String,
  name: String,
  surname: String,
  latitude: Number,
  longitude: Number,
  description: String,
  genre: {type: Number, enum: [0, 1, 2]},
  role: {type: String, enum: ['SOY ALUMNO', 'SOY PROFE', 'ADMON']},
  // subjects: [{type:Schema.Types.ObjectId, ref:'Subject'}],
  meetings: Array, //Array de Objetoeventos que aun no hay creados
  school: String, //CON EL JSON
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
