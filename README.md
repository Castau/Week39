
## Flow 2, second week (39)


##### Tuesday	
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Tuesday)	
###### Excercise 6 explain:  
###### What hoisting is?  
###### Hoisting is the default behaviour, all declarations are moved to the top of the scope (script or function) the top of the scope (script or function). Assignments are NOT moved. Because of this, all variable- and value declarations and assignments should be kept together, preferably at the top of the current scope. Functions are hoisted completely. 

###### What is the difference between the keyword var and the ES6 keyword let?
###### Variables declared with the let keyword can have Block Scope, which means that variables declared inside a block {} can not be accessed from outside the block, unlike var. let and const variables are NOT hoisted. 

###### Excercise 7 explain: 
###### How this in JavaScript differ from this in Java?  
###### In JavaScript 'this' refers to different values depending on where it is used: In a method (a function with an object associated with it), 'this' refers to the owner object. Alone, 'this' refers to the global object. In a function (no object is associated with it), 'this' refers to the global object. In an event, 'this' refers to the element that received the event. In Java, 'this' refers to the current instance object on which the method is executed. All methods are associated with an object in Java. 

###### The purpose of the methods call(), apply() and bind()?
###### call() and apply() are similar, they both take in an object which then becomes the object 'this' refers to. call() additionally takes in a list of arguments that are passed to the function using the call() method. In apply() the argument is a single array of arguments instead of a list. When bind() is called on a function it creates a new function with the same body and scope as the original function, but with 'this' now permanently bound to the first argument of bind. 

##### Wednesday
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Wednesday)	
###### Excercise 6 explain: 
###### The Response header Access_Control_Allow_Origin: * allows all domains to access the endpoint which is why there are no CORS errors in the browser. 

##### Thursday	
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Thursday)	
* [Frontend at surge](http://camillastaunstrup.surge.sh/)	
* [Backend on droplet](https://camillastaunstrup.dk/Backend/api/person/)	
###### If there are no user on the surge-server, then follow the link to the backend ad go to [this url](https://camillastaunstrup.dk/Backend/api/person/data), an then reload the frontend, to make sure there's data in the backends database, for the frontend to fetch. 

##### Friday	
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Friday)	
