import mongoose from 'mongoose'
import express from 'express';
import Book from './book.js';

const app = express()
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/books")
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.get("/api/books", async (req, res)=>{
  try {
    const books = await Book.find().select('-__v');
    res.send(books);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/books/:id", async(req, res)=>{    
  const id = req.params.id;
  try {
    const book = await Book.findById(id).select('-__v');
    res.send(book);
  } catch (error) {
    res.sendStatus(404).json(error)
  }
});
   
app.post("/api/books", async (req, res) =>{    
  if(!req.body) return res.sendStatus(400);
  const {title, description, authors, favorite, fileCover, fileName} = req.body
 
  try {
    const book = new Book({title, description, authors, favorite, fileCover, fileName});
    await book.save();
    res.send(book);
  } catch (error) {
    console.log(error);
  }
});
    
app.delete("/api/books/:id", async(req, res)=>{    
  const id = req.params.id;
  try {
    const book = await Book.deleteOne({_id: id});
    res.send('ok')
  } catch (error) {
    console.log(error);
  }
  
  if(book) res.send(book);
  else res.sendStatus(404);
});
   
app.put("/api/books/:id", async (req, res)=>{
  if(!req.body) return res.sendStatus(400);

  const id = req.params;
  const {title, authors} = req.body
  const newBook = {title, authors};

  try {
    const user = await Book.findByIdAndUpdate(id, newBook);
    res.redirect(`/api/books/${id}`)
  } catch (error) {
    res.sendStatus(404).json(error);
  }
});

app.listen(3030, () => {
  console.log('listened start');
})
