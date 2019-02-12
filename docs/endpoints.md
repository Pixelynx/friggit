# Diggit

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
    * `/n/subDiggit/post_title` Loads specific subDiggit posts

  * `POST /`

    * `/n` Creates subDiggit page
    * `/n/subDiggit` Creates post within subDiggit

  * `PUT /`

    * `/n/subDiggit/post_title` Edits post within specific subDiggit page
    * `/original/post_title` Edits post within OC page

  * `DELETE /`

    * `/n/subDiggit/post_title` Deletes post within specific subDiggit page
    * `/original/post_title` Deletes post from OC page

 ### Comments

  * `GET /`

    * `/n/subDiggit/comments/post_title` Gets post and comments from post within specific subDiggit page
    * `/original/comments/post_title` Gets post and comments from post within OC page

  * `POST /`

    * `/n/subDiggit/comments/post_title` Posts comment on post within specific subDiggit page
    * `/original/comments/post_title` Posts comment on post within OC page

  * `PUT /`
    * `/n/subDiggit/comments/post_title` Edits comment on post within specific subDiggit page
    * `/original/comments/post_title` Edits comment on post within OC page

  * `DELETE /`
    * `/n/subDiggit/comments/post_title` Deletes comment from post within specific subDiggit page
    * `/original/comments/post_title` Deletes comment from post within OC page

### subDiggit

* `GET /`
  * `/n/subDiggit` Retrieves posts within specific subDiggit page
  * `/n/subDiggit/users` Retrieves all users subscribed to subDiggit page

* `POST /'
  * `/n` Creates new subDiggit page

* `PUT /`
  * `/n/subDiggit` Edit subDiggit page (admin only)

* `DELETE /`
  * `/n/subDiggit` Deletes subDiggit page (admin only)
