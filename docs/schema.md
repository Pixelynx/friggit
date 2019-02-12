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
| user_id | integer | not null, foreign key, on delete cascade |

## Community Pages
---
| Column Name | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| admin_id | integer | not null, foreign key, on delete null |

## Subscriptions
---
| Column Name | Data Type | Details |
| ------------- | ------------- | ------------- |
| user_id | integer | not null, foreign key, on delete cascade |
| page_id | integer | not null, foreign key, on delete cascade |

## Comments
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key, on delete null |
| post_id| integer |not null, foreign key, on delete cascade |
| community_id | integer | not null, foreign key, on delete cascade |

## Posts
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| user_id | integer | not null, foreign key |
| title | string | not null |
| body | text | not null |
| community_id | integer | not null, foreign key, on delete cascade |
| thumbnail | string | |
| oc | boolean | not null |
| spoiler | boolean | not null |
| nsfw | boolean | not null |

## Upvote
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| post_id | integer | not null, foreign key, on delete cascade |
| comment_id | integer | foreign key, on delete cascade |

## Downvote
---
| Column Name  | Data Type | Details |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| post_id | integer | not null, foreign key, on delete cascade |
| comment_id | integer | foreign key, on delete cascade |
