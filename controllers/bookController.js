const db = require("../models/bookModel");

module.exports = {
  saveBook: async (req, res) => {
    try {
      // db.set(req.body);
      console.log("success");
      res.json("success");
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  },
};
