const { db } = require('../index/index.js');

module.exports = {

  getAllPosts: (req, res, next) => {
    db.any('SELECT * FROM posts')
      .then(body => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'Retrieved all posts',
          body: body
        })
      }).catch(err => console.log(err))
  },

  createNewPost: (req, res, next) => {
    db.none('INSERT INTO posts (title, post, _link, oc, nsfw, spoiler)' +
      'VALUES ($1, $2, $3, $4, $5, $6)', [
        req.body.title,
        req.body.post,
        req.body._link,
        req.body.oc,
        req.body.nsfw,
        req.body.spoiler
    ])
      .then(() => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'New post created'
        })
      }).catch(err => console.log(err))
  },

  getCommentsForPost: (req, res, next) => {
    db.any
  }
}
