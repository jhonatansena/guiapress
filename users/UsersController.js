const express = require("express");
const router = express.Router();
const Category = require("./User")

router.get('/admin/users/create', (req, res) => {
    res.render("admin/users/create");
})


module.exports = router