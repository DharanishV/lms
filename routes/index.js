const router = require("express").Router();
const Cohort = require("./cohort");
const sessionRoutes = require("./session");
const courseworkRoutes = require("./coursework");

router.use("/cohort", Cohort);
router.use("/session", sessionRoutes);
router.use("/coursework", courseworkRoutes);

module.exports = router;