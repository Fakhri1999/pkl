const router = require("express").Router();
const Setting = require("../controllers/Setting");

router.get("/login", Setting.showLoginSetting);
router.post("/login", Setting.updateLoginSetting);
router.get("/gateway", Setting.showGatewaySetting);
router.post("/gateway", Setting.updateGatewaySetting);
router.get("/restart-service", Setting.restartService);

module.exports = router;
