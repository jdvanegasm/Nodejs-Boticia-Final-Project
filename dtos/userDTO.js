// DTO para la colección 'user'
const mongoose = require('mongoose');

// Definir el esquema para la colección 'user'
const userSchema = new mongoose.Schema({
  discordUserName: {type: String, required: [true, "a nickname is required"]},
  password: {type: String, required: [true, "a password is required"]},
  userType: { type: Schema.Types.ObjectId, ref: 'userTypes',  required: [true, 'an userType is required'] },
  status: { type: boolean, default: true}
});

// Crear el modelo 'User' basado en el esquema
const User = mongoose.model('User', userSchema);

module.exports = User; // Exportar el modelo para usarlo en otras partes de tu aplicación