const { db } = require('../index/index.js');

module.exports = {

  getAllUsers: (req, res, next) => {
    db.any('SELECT * FROM users')
      .then(body => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'Got all users',
          body: body
      })
    }).catch(err => console.log(err))
  },

  createNewUser: (req, res, next) => {
    db.none('INSERT INTO users (username, email, display_name, password_digest)' +
            'VALUES (${username}, ${email}, ${display_name}, ${password})')
            .then(() => {
              res.status(200)
              .json({
                status: 'Success',
                message: 'New user created'
              })
            }).catch(err => console.log(err))
  }
}
