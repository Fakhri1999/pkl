const router = require("express").Router();
const Setting = require("../controllers/Setting");

router.get("/login", Setting.showLoginSetting);
router.post("/login", Setting.updateLoginSetting);
router.get("/gateway", Setting.showGatewaySetting);
router.post("/gateway", Setting.updateGatewaySetting);
// router.get("/add", Perangkat.createPerangkat);
// router.get("/:id/edit", Perangkat.editPerangkat)
// router.post("/:id/edit", Perangkat.updatePerangkat)
// router.get("/:id/delete", Perangkat.deletePerangkat)

module.exports = router;
