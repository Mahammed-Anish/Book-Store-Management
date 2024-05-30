const mongoose = require("mongoose");
const books = require("../models/bookSchema");
mongoose.connect(
  "mongodb+srv://Mahammed:xQEZDvCKO60Zec7k@cluster0.wlrbjfy.mongodb.net/bookStore",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log("error occurred while connecting to database", error);
});

db.once("open", () => {
  console.log("Successfully Connected to the database");
});

const sample = [
  {
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    edition: 2,
    price: 25.5,
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    edition: 1,
    price: 14.25,
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    edition: 4,
    price: 19.99,
  },
  {
    name: "The Da Vinci Code",
    author: "Dan Brown",
    edition: 3,
    price: 16.75,
  },
  {
    name: "The Hunger Games",
    author: "Suzanne Collins",
    edition: 1,
    price: 11.95,
  },
];

books.insertMany(sample).then((res) => {
  console.log(res);
});
