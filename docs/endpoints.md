# Subbit (Name subject to change)

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
    * `/n/community/post_title` Loads specific community posts

  * `POST /`

    * `/n` Creates community page
    * `/n/community` Creates post within community 
    
  * `PUT /`
  
    * `/n/community/post_title` Edits post within specific community page
    * `/original/post_title` Edits post within OC page
    
  * `DELETE /`
  
    * `/n/community/post_title` Deletes post within specific community page
    * `/original/post_title` Deletes post from OC page
    
 ### Comments

  * `GET /`

    * `/n/community/comments/post_title` Gets post and comments from post within specific community page
    * `/original/comments?post_title` Gets post and comments from post within OC page

  * `POST /`

    * `/n/community/comments/post_title` Posts comment on post within specific community page
    * `/original/comments?post_title` Posts comment on post within OC page 
    
  * `PUT /`
    * `/n/community/comments/post_title` Edits comment on post within specific community page
    * `/original/comments?post_title` Edits comment on post within OC page 
    
  * `DELETE /`
    * `/n/community/comments/post_title` Deletes comment from post within specific community page
    * `/original/comments?post_title` Deletes comment from post within OC page
     
### Community

* `GET /`
  * `/n/community` Retrieves posts within specific community page
  * `/n/community/users` Retrieves all users suscribed to community page
   
* `POST /'
  * `/n` Creates new community page
   
* `PUT /`
  * `/n/community` Edit community page (admin only)
   
* `DELETE /`
  * `/n/community` Deletes community page (admin only)
