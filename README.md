# MidTermGigih

## Database Structure

### Products Collection

| Field Name  | Type |
| ------------- |:-------------:|
|_id | ObjectID |
| title      | String     |
| urlProduct      | String     |
| price      | Number     |
| vidThumbnailId      | String     |

### Videos Collection

| Field Name  | Type |
| ------------- |:-------------:|
|_id | ObjectID |
| urlVideo     | String     |
| urlImage      | String     |


### Comments Collection

| Field Name  | Type |
| ------------- |:-------------:|
|_id | ObjectID |
| username      | String     |
| comment      | String     |
|timestamp| Date |
|vidThumbnailId| String |
