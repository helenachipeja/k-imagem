const connection = require('../config/db.config.js');

const User = function(user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  connection.query('INSERT INTO users SET ?', newUser, (err, res) => {
    if (err) {
      console.error('Error creating new user: ', err);
      result(err, null);
      return;
    }
    console.log('Created new user: ', { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = User;
