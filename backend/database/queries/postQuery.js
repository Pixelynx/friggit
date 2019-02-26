const { db } = require('../index/index.js');

module.exports = {
  
  createNewPost: (req, res, next) => {
    db.none('INSERT INTO posts (title, body) VALUES (${title}, ${body})')
      .then(() => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'New post created'
        })
      }).catch(err => console.log(err))
  }

}
