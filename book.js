import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  _id: "string",
  title: "string",
  description: "string",
  authors: "string",
  favorite: "string",
  fileCover: "string",
  fileName: "string"
});

const Book = model('Book', bookSchema);
export default Book;