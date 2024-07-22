// DTO para la colección 'userType'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema para la colección 'userType'
const userTypeSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'a nickname is required']},
  interestCategory: [{ type: Schema.Types.ObjectId, ref: 'Categories', required: false}],
  status: { type: Boolean, default: true}
});

// Crear el modelo 'UserType' basado en el esquema
const UserType = mongoose.model('UserType', userTypeSchema);

module.exports = UserType;