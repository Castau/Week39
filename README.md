
## Flow 2, second week (39)


##### Tuesday	
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Tuesday)	
##### Excercise 6 explain:  
##### What hoisting is?  
###### Hoisting is the default behaviour, all declarations are moved to the top of the scope (script or function) the top of the scope (script or function). Assignments are NOT moved. Because of this, all variable- and value declarations and assignments should be kept together, preferably at the top of the current scope. Functions are hoisted completely. 

##### What is the difference between the keyword var and the ES6 keyword let?
###### Variables declared with the let keyword can have Block Scope, which means that variables declared inside a block {} can not be accessed from outside the block, unlike var. let and const variables are NOT hoisted. 

##### Excercise 7 explain: 
##### How this in JavaScript differ from this in Java?  
###### In JavaScript 'this' refers to different values depending on where it is used: In a method (a function with an object associated with it), 'this' refers to the owner object. Alone, 'this' refers to the global object. In a function (no object is associated with it), 'this' refers to the global object. In an event, 'this' refers to the element that received the event. In Java, 'this' refers to the current instance object on which the method is executed. All methods are associated with an object in Java. 

##### The purpose of the methods call(), apply() and bind()?
###### call() and apply() are similar, they both take in an object which then becomes the object 'this' refers to. call() additionally takes in a list of arguments that are passed to the function using the call() method. In apply() the argument is a single array of arguments instead of a list. When bind() is called on a function it creates a new function with the same body and scope as the original function, but with 'this' now permanently bound to the first argument of bind. 

##### Wednesday
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Wednesday)	
##### Excercise 6 explain: 
###### The Response header Access_Control_Allow_Origin: * allows all domains to access the endpoint which is why there are no CORS errors in the browser. 

##### Thursday	
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Thursday)	
* [Frontend at surge](http://camillastaunstrup.surge.sh/)	
* [Backend on droplet](https://camillastaunstrup.dk/Backend/api/person/)	
###### If there are no user on the surge-server, then follow the link to the backend ad go to [this url](https://camillastaunstrup.dk/Backend/api/person/data), an then reload the frontend, to make sure there's data in the backends database, for the frontend to fetch. 

##### Friday	
* [Sourcecode](https://github.com/Castau/Week39/tree/master/Friday)	
##### Excercise 1 (Exam preparation exercise about AJAX, CORS and SVG)
##### General part
##### Explain about the Object Model, and why it’s (very) relevant for modern Web-development
###### The Document Object Model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. With Document Object Model methods you can change the document's structure, style, or content. Nodes can also have event handlers attached to them, and once an event is triggered, the event handlers get executed. Document Object Model manipulation is basically required to provide any form of feedback for user actions or render meaningful information to the user.
##### Explain (using an example of your own choice) about JavaScript events, and Event Bubbling
###### In the bubbling phase phase events propagates or bubbles back up the DOM tree, from the target element up to the Window, visiting all of the ancestors of the target element one by one. For example, if the user clicks a hyperlink, that click event would pass through the p-element containing the link, the body-element, then the html-element, and the document node. If any ancestor of the target element and the target itself has event handlers assigned for that type of event, those handlers are executed during this phase.
##### Elaborate on how JSON or XML supports communication between subsystems, even when the subsystems are implemented on diﬀerent platforms.
###### With JSON and XML all data is communicated the same way. The data is not dependant on anything else in the recieving system. This ensures very easy communication between all web-systems that can send and/or recieve JSON/XML formatted data. 
##### Explain the topic AJAX and how it has changed the way modern web-applications are created
###### Fetch is the native Javascript way to execute Ajax. The fetch call returns a promise that resolves to a response object. When the promise resolves, the response is passed to .then. This is where the response could be used. If the request does not complete, .catch takes over and is passed the corresponding error.
##### Explain the Same Origin Policy (for AJAX), and different ways to work around it
###### Same Origin Policy makes it impossiple for anyone not allowed in the CORS heaers to gain access to endpoints, with javascript. A way around it is by using a proxy-server. The not-allowed request is sent to the proxy-server and the proxy-server then sends a server-server request to target server and lastly the proxy server forwards the response back to the original request-sender. 
##### Practical part
##### For the previous task it was possible to obtain data right from restcountries.eu via an AJAX call made from within your Browser. Use Chrome Developer tools to explain (with focus on the Same Origin Policy) why this is possible. 
###### If the client, and the api you try to call, are not located on the same Origin the request is not permitted by the browser. One solution is with the use of CORS-headers set by the api. Since the Access-Control-Allow-Origin is sat, it's possible for me to access the api.
##### The rest of this first assignment (clickable conuntries and the proxy server) can be seen in the sourcecode linked above
##### Excercise 2 (Frontend exercise (last part of exercise from last week)) 
###### This part was already done in the thursday assignment, since i used "REST with JAX RS" as the "last weeks most mature excercise". 
