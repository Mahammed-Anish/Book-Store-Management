const express = require("express");
const router = express.Router();
const controller = require("../controller/booksController");
const bookCrudController = require("../middlewares/bookCrudController");

router.get("/", controller.allBooks);
router.get("/bookStore/signup", controller.registerForm);
router.get("/bookStore/signin", controller.loginForm);
router.post("/bookStore/addUser", controller.createUser);
router.post("/verify-login", controller.verifyLogin);
router.get("/update", controller.updateProfile);
router.post("/submit", controller.saveUpdate);
router.get("/admin", bookCrudController.adminLogin);
router.post("/verify-admin", bookCrudController.verifyAdmin);
router.get("/addBooks", bookCrudController.addBookPage);
router.post("/bookAdd", bookCrudController.addBook);
router.post("/updateBooks", bookCrudController.updateBookPage);
router.post("/bookUpdate", bookCrudController.updateBook);
router.post("/deleteBooks", bookCrudController.deleteBook);
router.post("/add-to-cart", bookCrudController.addToCart);
router.get("/myCart", bookCrudController.viewCart);
//  Create routes for registration, login, and user profile management.
router.get("/profile", controller.getProfile);
router.get("/search", bookCrudController.search);
module.exports = router;
