secret -- seed to generate random hash
 *

**helpers.js**
   "helper functions"

  <!-- const pgp = require('pg-promise')({});
  const connectionString = 'postgres://localhost/userlist';
  const db = pgp(connectionString); -->
  const bcrypt = require('bcryptjs');

module.exports = {

  comparePass(userPass, databasePass) {
    return bcrypt.compareSync(userPass, databasePass);
  }

  createHash = () => {
    <!-- salting makes it more difficult for hackers to figure out password -->
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  logInRequired = (req, res, next) => {
    if(!req.user) {
      res.status(401)
      .json({ status: 'Forbidden - please log in.' })
      return;
    }
    next();
  }

}

**passport.js**

const passport = require('passport');
const pgp = require('pg-promise')({});
const connectionString = 'postgres://localhost/userlist';
const db = pgp(connectionString);

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
    });

  passport.deserializeUser((username, done) => {
    db.one('SELECT * FROM users WHERE username = ${username}',
            {username: username})
      .then((user) => {
        done(null, user)
        })
        .catch(err => done(err))
    })
}

**local.js**

const passport = require('passport');
const LocalStrategy = require('passport-local');
const init = require('./passport');
const connectionString = 'postgres://localhost/userlist';
const db = pgp(connectionString);

passport.use(
  new LocalStrategy((username, password, done) => {
    db.one('SELECT * FROM users WHERE username = ${username}',
            {username: username})
      .then(usr => {
        if(!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
        })
        .catch(err => done(err))
    })
  )


**queries**

const authHelpers = require('/auth/helpers')

module.exports = {

  createUser = (req, res, next) => {
    const hash = authHelpers.createHash(req.body.password);

    db.none('INSERT INTO users (username, password_digest) VALUES (${username},
      ${password})',
      { username: req.body.username, pawword: hash }
    )
      .then(() => {
        res.status(200)
        .json({ message: 'Registration successful.'})
        });
        .catch(err => {
          res.status(500)
          .json({ message: err })
          })
  }

  logoutUser = (req, res) => {
    res.json(req.user);
}

}
