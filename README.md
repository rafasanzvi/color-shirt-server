<div id="title" align="center">
<h1>Policroma<h1>
</div>  

 <br>
  
<!--HEADER-->
<div id="header" align="center">
  <img src="https://media.giphy.com/media/3orif8pKLiSeJP0paw/giphy.gif" width="350" />
</div>
<br>

<!--DESCRIPTION-->
<p>
This project was done in just 1 week as part of our web development Bootcamp assignments at Ironhack. Requirements: create an app just using JavaScript, HTML, CSS, Handlebars, NodeJS, Express, MongoDB an homemade internal API Rest and an external API using Google Maps.
  
The project is based on an encyclopaedia of plants whose characteristics are being researched for medicinal use. The user can access the specific plants and see their characteristics, as well as access a list of events in different parts of the world and register and see their location via Google Maps.  
</p>
  
<!--MAIN FEATURES-->  
  <h3>Main Features</h3>
  
- Role play where we have admin, staff and users with different privileges.
- Registration and authentication system
- Protected routes
- Database of users, events and plants in MongoDB.  
- Plants gallery, events and users list
- CRUD system
- Rendering from back-end  

---
<br>
<!--LINK-->
<div id="link" align="center">
<img src="https://i.postimg.cc/cJfn2PQn/Portada-Trip-and-trip.jpg" width="400" height="210"/></a>
</div>

<br>

<h3 align="center">:mushroom: Want to take a look? <a href="https://trip-and-trip.herokuapp.com/plants">Click here</a> :mushroom: </h3>
  
  
 <h3>App routes</h3>

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

