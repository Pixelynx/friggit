const comparePass = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword);
}

const createUser = (req) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none(
    'INSERT INTO users (username, password_digest) VALUES (${username}, ${password})',
    { username: req.body.username, password: hash }
  )
}
