const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const snippetSchema = new Schema({
  snippet: String,
  slug: String,
});

export const Snippet = mongoose.models.Snippet || mongoose.model('Snippet', snippetSchema);