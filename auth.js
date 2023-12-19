const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.post('/login', (req, res) => {
  // Implement your login logic here
  // For simplicity, consider setting a session or token to manage authentication
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  // Implement your logout logic here
  // For simplicity, consider clearing the session or token
  res.render('logout.ejs');
});

module.exports = router;
