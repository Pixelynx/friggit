# Friggit

---

## HTML API

---

### Root

  * `GET /` Loads landing page

 ## AJAX API

---

### User
  * `GET /`
    * `/username` Retrieves specific user and their posts
    * `/home` Loads signed in user's home page
    * `/submit` Loads create post page for signed in user

  * `POST /user/username`
    * `/submit` Creates new post

  * `PUT /user/username` Updates user information

  * `DELETE /user/username` Deletes user

 ### Posts

  * `GET /`

    * `/n/all` Loads "All" posts
    * `/original` Loads "Original Content" posts
    * `/n/subFriggit/post_title` Loads specific subFriggit posts

  * `POST /`

    * `/n` Creates subFriggit page
    * `/n/subFriggit` Creates post within subFriggit

  * `PUT /`

    * `/n/subFriggit/post_title` Edits post within specific subFriggit page
    * `/original/post_title` Edits post within OC page

  * `DELETE /`

    * `/n/subFriggit/post_title` Deletes post within specific subFriggit page
    * `/original/post_title` Deletes post from OC page

 ### Comments

  * `GET /`

    * `/n/subFriggit/comments/post_title` Gets post and comments from post within specific subFriggit page
    * `/original/comments/post_title` Gets post and comments from post within OC page

  * `POST /`

    * `/n/subFriggit/comments/post_title` Posts comment on post within specific subFriggit page
    * `/original/comments/post_title` Posts comment on post within OC page

  * `PUT /`
    * `/n/subFriggit/comments/post_title` Edits comment on post within specific subFriggit page
    * `/original/comments/post_title` Edits comment on post within OC page

  * `DELETE /`
    * `/n/subFriggit/comments/post_title` Deletes comment from post within specific subFriggit page
    * `/original/comments/post_title` Deletes comment from post within OC page

### subFriggit

* `GET /`
  * `/n/subFriggit` Retrieves posts within specific subFriggit page
  * `/n/subFriggit/users` Retrieves all users subscribed to subFriggit page

* `POST /'
  * `/n` Creates new subFriggit page

* `PUT /`
  * `/n/subFriggit` Edit subFriggit page (admin only)

* `DELETE /`
  * `/n/subFriggit` Deletes subFriggit page (admin only)
