import mongoose from "mongoose";


const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    titel: String,
    category: String
})
const Book = mongoose.model("Book", bookSchema)
export default Book;