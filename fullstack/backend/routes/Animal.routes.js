const express = require("express")
const router = express.Router()
const { AnimalController } = require("../controllers/Animal.controller")
const { upload } = require("../middleware/multer")
router.get("/", AnimalController.getAll)
router.get("/:id", AnimalController.getById)
router.post("/", upload.single("image"), AnimalController.add)
router.put("/:id", AnimalController.edit)
router.delete("/:id", AnimalController.delete)

module.exports = router
