## API endpoints

| HTTP Method 	| URI path      	| Description                                    	| RESPONSE 	|
|-------------	|---------------	|------------------------------------------------	|---------	|
| GET         	| `api/shirts` 	| returns shirt list 	|  [{shirts}] 
| POST         	| `api/shirts/create` 	| Creates shirt 	|  Create a new shirt
| GET         	| `api/shirts/:id` 	| Returns shirt details	|  {shirts} 
| PUT         	| `api/shirts/:id/edit` 	|edits shirts 	|  {user} 
| DELETE        | `api/shirts/delete` | delete shirt | {message: "Your shirt has been deleted"}
| PUT           | `api/subscribe` | update isSubscribed: true | 
| GET         	| `api/users/list` 	| returns user list 	|  [{user}]
| GET         	| `api/users/:id` 	| returns user details	|  {user}
| PUT         	| `api/users/:id/edit` 	| edits user 	|  {user}
| DELETE        | `api/users/delete` | delete user | {message: "Your user has been deleted"}


## Auth endpoints

| POST         	| `api/register` 	| registers user 	|  Create a new user
| POST         	| `api/login` 	|checks credentials	|  Login user
| GET          | `api/verify` | verifies token | 

