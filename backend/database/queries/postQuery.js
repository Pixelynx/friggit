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
    db.none('INSERT INTO posts (title, post, thumbnail, _link, oc, nsfw, spoiler) VALUES ($1, $2, $3, $4, $5, $6, $7)', [
      req.body.title,
      req.body.post,
      req.body.thumbnail,
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
  }

}
