const mongoose = require('mongoose');

// Definir el esquema para la colección 'user'
const categoriesSchema = new mongoose.Schema({
  categoryName: {type: String, required: [true, "a title is required"]},
  status: { type: Boolean, default: true}
});

// Crear el modelo 'User' basado en el esquema
const category = mongoose.model('Categorie', categoriesSchema);

module.exports = category; // Exportar el modelo para usarlo en otras partes de tu aplicación