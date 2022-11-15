const express = require("express");
const router = new express.Router();

router.get("/check", (req, res) => {
  res.send("Everything Working Fine");
});

module.exports = router;
