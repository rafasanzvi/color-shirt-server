## API endpoints

| HTTP Method 	| URI path      	| Description                                    	| RESPONSE 	|
|-------------	|---------------	|------------------------------------------------	|---------	|
| GET         	| `api/shirts` 	| returns shirt list 	|  [{shirts}] 
| POST         	| `api/shirts/create` 	| Creates shirt 	|  Create a new shirt
| GET         	| `api/shirts/:id` 	| Returns shirt details	|  {shirts} 
| PUT         	| `api/shirts/:id/edit` 	|edits shirts 	|  {user} 
| PUT           | `api/subscribe` | update isSubscribed: true | 
| GET         	| `api/users/list` 	| returns user list 	|  [{user}]
| GET         	| `api/users/:id` 	| returns user details	|  {user}
| PUT         	| `api/users/:id/edit` 	| edits user 	|  {user} Updates existing users
| DELETE        | `api/users/deleter` | delete user | {message: "Your user has been deleted"}


## Auth endpoints

| POST         	| `api/register` 	| registers user 	|  Create a new user
| POST         	| `api/login` 	|checks credentials	|  Login user
| POST          | `api/loggout` | close session | 
# color-shirt-server
