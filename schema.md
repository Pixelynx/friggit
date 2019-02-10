# Schema
---
## Users
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| username | string | not null, unique |
| display_name | string  | |
| email | string | not null, unique |
| password | string | not null |
| link_twitter | boolean | not null |
| about | text | |

## Profile
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key, cascade |

## Sub-subbits
---
| Column Name | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| admin_id | integer | not null, foreign key |

## Comments
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key |
| post_id| integer |not null, foreign key, cascade |
| sub_id | integer | not null, foreign key, cascade |
| | | |

## Posts
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| user_id | integer | not null, foreign key |
| title | string | not null |
| body | text | not null |
| sub_id | integer | not null, foreign key, cascade |
| thumbnail | string | |
| oc | boolean | not null |
| spoiler | boolean | not null |
| nsfw | boolean | not null |
| | | |

## Upvote
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| post_id | integer | not null, foreign key |
| comment_id | integer | foreign key |

## Downvote
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| post_id | integer | not null, foreign key |
| comment_id | integer | foreign key |
