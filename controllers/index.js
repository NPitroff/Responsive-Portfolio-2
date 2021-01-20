const router = require('express').Router();

const homeRoutes = require('./home-routes');
const bio = require("./bio");
const contact = require("./contact");

router.use('/', homeRoutes);

module.exports = router;