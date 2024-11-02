const express = require("express");
const BorrowController = require("../controllers/borrow_controller");

const borrowRouter = express.Router();

borrowRouter.get("/borrow/book/list", BorrowController.getAll);
borrowRouter.get("/borrow/:id", BorrowController.getById);
borrowRouter.post("/borrow/book", BorrowController.create);
borrowRouter.put("/borrow/:id", BorrowController.update);
borrowRouter.delete("/borrow/:id", BorrowController.delete);
borrowRouter.post("/borrow/book/return", BorrowController.return);

module.exports = borrowRouter;
