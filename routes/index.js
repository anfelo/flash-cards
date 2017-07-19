const express = require('express');
const router = express.Router();

// GET Root
router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (!name) {
        res.redirect('/hello');
    } else {
        res.render('index' , { name });
    }
});

// GET /hello
router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (!name) {
        res.render('hello');
    } else {
        res.redirect('/');
    }
});

// POST /hello
router.post('/hello', (req, res) => {
    res.cookie( 'username', req.body.username );
    res.redirect( '/' );
});

// POST /goodbye
router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect( '/hello' );
});

module.exports = router;