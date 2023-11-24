const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema para la colección 'user'
const newsSchema = new mongoose.Schema({
  title: {type: String, required: [true, "a title is required"]},
  url: {type: String, required: [true, "a url is required"]},
  source: { type: String, required: [true, 'a source is required'] },
  newsCategory: { type: Schema.Types.ObjectId, ref: 'Categories',  required: [true, 'a category is required']},
  status: { type: Boolean, default: true}
});

// Crear el modelo 'User' basado en el esquema
const news = mongoose.model('New', newsSchema);

module.exports = news; // Exportar el modelo para usarlo en otras partes de tu aplicación