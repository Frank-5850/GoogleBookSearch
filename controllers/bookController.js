const db = require("../models/bookModel");

module.exports = {
  test: async (req, res) => {
    try {
      console.log("success");
      res.json("success");
    } catch (error) {
      console.log(error);
    }
  },
};
