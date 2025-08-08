import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    authors: {
        type: [String],
        required: true
    },
    page: {
        type: Number,
        required: true,
        min: 1
    },
    publisher: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    genres: {
        type: [String],
        required: true
    }
}, {
    timestamps: true // optional: adds createdAt and updatedAt
});

const Book = mongoose.model('books', bookSchema); // change to your table name

export default Book;
