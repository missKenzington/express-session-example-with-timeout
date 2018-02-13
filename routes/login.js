var express = require('express');
var router = express.Router();
var sess;

/* GET home page. */
router.post('/', function(req, res, next) {
    sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
    sess.email=req.body.email;
    sess.cookie.expires = new Date(Date.now() + (60000 * 30));
    res.end('done');
});

module.exports = router;
