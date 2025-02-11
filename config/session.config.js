const session = require('express-session');

module.exports = app => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: true,
      //cookie: { maxAge: 600000 } // 600 * 1000 ms === 10 min
    })
  );
};