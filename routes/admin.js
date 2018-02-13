var express = require('express');
var router = express.Router();
var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
    sess = req.session;

    if(sess.email) {
        res.write('<h1>Hello '+sess.email+'</h1>');
        res.end('<a href="+">Logout</a>');
    } else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href="+">Login</a>');
    }
});

module.exports = router;