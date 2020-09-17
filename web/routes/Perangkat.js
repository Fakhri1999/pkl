const router = require("express").Router();
const Perangkat = require("../controllers/Perangkat");

router.get("/", Perangkat.getAllPerangkat);
router.get("/add", Perangkat.createPerangkat);
router.post("/add", Perangkat.addPerangkat);
router.get("/:id/edit", Perangkat.editPerangkat)
router.post("/:id/edit", Perangkat.updatePerangkat)
router.get("/:id/delete", Perangkat.deletePerangkat)

module.exports = router;
