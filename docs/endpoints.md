# Subbit (Name subject to change)

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
    * `/subbit/create` Loads create sub-subbit page for signed in user
    
  * `POST /user/username`
    * `/submit` Creates new post
    * `/user/subbit/create` Creates new sub-subbit community
    
  * `PUT /user/username`
    * Updates user information

  * `DELETE /user/username`
    * Deletes user
    
 ### Posts

  * `GET /posts`

    * `/n/all` Loads all posts
    * `/n/popular` Loads most popular posts [based on upvotes]
    * `/original` Loads Original content posts
    * `/n/sub-subbit/post_title` Loads specific subbit post

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
    * `/n/sub-subbit/post_title` 

  * `POST /`

    * `/ ` 
    * `/ ` 
    
  * `PUT /`
    * text
    
  * `DELETE /`
    * text 
