const router = require('express').Router();

const homeRoutes = require('./home-routes');
// const apiRoutes = require('./api');
// const bioRoutes = require("/bio");
// const contactRoutes = require("/contact");

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;