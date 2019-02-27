const { db } = require('../index/index.js');

module.exports = {

  createNewPost: (req, res, next) => {
    db.none('INSERT INTO posts (title, body) VALUES ($1, $2)', [
      req.body.title,
      req.body.body
    ])
      .then(() => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'New post created'
        })
      }).catch(err => console.log(err))
  }

}
