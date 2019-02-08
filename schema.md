# Schema
---
## Users
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| username | string | not null, indexed, unique |
| display_name | string  | |
| email | string | not null, indexed, unique |
| password | string | not null |
| link_twitter | boolean | not null |
| about | text | |

## Profile
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key |

## Comments
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key |
| | | |
| | | |
| | | |
| | | |
| | | |

## Posts
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| user_id | integer | not null, foreign key |
| | | |
| | | |
| | | |
| | | |
| | | |

