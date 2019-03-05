const { db } = require('../index/index.js');

module.exports = {

  getAllPosts: (req, res, next) => {
    db.any('SELECT * FROM posts')
      .then(output => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'Retrieved all posts',
          posts: output
        })
      }).catch(err => console.log(err))
  },

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
