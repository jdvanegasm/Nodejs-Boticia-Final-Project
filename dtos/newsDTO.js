const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema para la colección 'news'
const newsSchema = new mongoose.Schema({
  title: {type: String, required: [true, "a title is required"]},
  url: {type: String, required: [true, "a url is required"]},
  source: { type: String, required: [true, 'a source is required'] },
  newsCategory: { type: Schema.Types.ObjectId, ref: 'Categories'},
  status: { type: Boolean, default: true}
});

// Crear el modelo 'News' basado en el esquema
const news = mongoose.model('New', newsSchema);

module.exports = news; 