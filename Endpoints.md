# Still Naminggit

---

## HTML API

---

### Root

  * `GET /`
    * Loads landing page
    
 ## AJAX API

---

### User
  * `GET /user/username`
    * Retrieves specific user and their posts
    * `/home` Loads signed in user's home page
    * `/submit` Loads create post page for signed in user
    * `/"Naminggit"/create` Loads create sub-"Naminggit" page for signed in user
    
  * `POST /user/username`
    * `/submit` Creates new post
    * `/user/"Naminggit"/create` Creates new sub-"Naminggit" community
    
  * `PUT /user/username`
    * Updates user information

  * `DELETE /user/username`
    * Deletes user
    
 ### Posts

  * `GET /posts`

    * `/n/all` Loads all posts
    * `/n/popular` Loads most popular posts [based on upvotes]
    * `/original` Loads Original content posts
    * `/n/sub-"naminggit"/post_title` Loads specific "naminggit" post

  * `POST /`

    * `/ ` 
    * `/ ` 
    
  * `PUT /`
    * text
    
  * `DELETE /`
    * text 
    
 ### Comments

  * `GET /comments`

    * `/n/all` 
    * `/n/popular` 
    * `/original` 
    * `/n/sub-"naminggit"/post_title` 

  * `POST /`

    * `/ ` 
    * `/ ` 
    
  * `PUT /`
    * text
    
  * `DELETE /`
    * text 