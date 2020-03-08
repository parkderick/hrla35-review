const router = require("express").Router();
// const express = require("express");
// const router = express.Router();
const ctrl = require("./ctrl");

// router.get("/getall",ctrl)
router.route("/getall").get(ctrl.getAll);

router.route("/get/:type").get(ctrl.getByType);

router.route("/changename/:id").put(ctrl.updateName);

module.exports = router;
