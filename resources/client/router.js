const express = require("express");
const router = express.Router();
const controller = require("./controller");

//TODO
router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", controller.add);

router.put("/:id", controller.update);

router.delete("/:id", controller.remove);

router.delete("/", controller.removeAll);

module.exports = router;
