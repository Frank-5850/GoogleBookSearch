const router = require("express").Router();
const { saveBook } = require("../controllers/bookController");

router.post("/saveBook", saveBook);

module.exports = router;
