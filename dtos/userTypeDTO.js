// DTO para la colección 'userType'
const mongoose = require('mongoose');

// Definir el esquema para la colección 'userType'
const userTypeSchema = new mongoose.Schema({
  nickName: { type: String, required: [true, 'a nickname is required']},
  interestCategory: [{ type: Schema.Types.ObjectId, ref: 'categorys',  required: [true, 'an category is required']}],
  status: { type: boolean, default: true}
});

// Crear el modelo 'UserType' basado en el esquema
const UserType = mongoose.model('UserType', userTypeSchema);

module.exports = UserType; // Exportar el modelo para usarlo en otras partes de tu aplicación