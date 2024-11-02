const DB = require("../models");
const ResponseHelper = require("../utils/response");

class BorrowerController {
  static async getAll(req, res) {
    try {
      const items = await DB.Borrower.find();
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const items = await DB.Borrower.findById(req.params.id);
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async create(req, res) {
    try {
      const items = await DB.Borrower.create(req.body);
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async update(req, res) {
    try {
      if (!req.params.id) {
        return ResponseHelper.error(res, "ID not provided!", 400);
      }

      const items = await DB.Borrower.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async delete(req, res) {
    try {
      if (!req.params.id) {
        return ResponseHelper.error(res, "ID not provided!", 400);
      }

      const items = await DB.Borrower.findByIdAndDelete(req.params.id);
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async uploadImage(req, res) {
    try {
      if (!req.body.id) {
        return ResponseHelper.error(res, "ID not provided!", 400);
      }

      console.log("BODY", req.body);

      const item = await DB.Borrower.findById(req.body.id);

      console.log("ITEM", item);

      item.coverUrl = req.body.coverUrl;

      await item.save();

      return ResponseHelper.success(res, item);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }
}

module.exports = BorrowerController;
