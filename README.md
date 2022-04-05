# Definding RESTful Routes
-Get request:for retriving info (not side effects like deliting or creating)
    *Used to retrive information
    *Data is send via query string
    *Information is plainly visible in the URL
    *Limited amount of data can be sent
-Post request: used to create things (send data / submit data as part of the request body, therefore we have more flexiility as far as how we send data!) 
    *Used to post data to the server
    *Used to write/create/update
    *Data is sent via request body, not a query string
    *Can send any soft of data (JSON)
-Express Post Routes
-Parsing the request body
-Intro to REST
    *Representational State Transfer
    *REST is an "architectural style for distributed hypermedia systems"
    *A set of guidelines for how a client + server should communicate and perform CRUD operation on  a given resourse.

        -The main idea of REST is treating data on the server side as resources that can be CRUDed
        -The most common way of approaching REST is in formatting the URLs and HTTP verbs in your applications
-RESTfull comments index
    NAME       PATH                 VERB        PURPOSE
    Index      /comments            GET         Dispaly all comments
    New        /comments/new        GET         Form to create a new comment
    Create     /comments            POST        Creates a new comment on server
    Show       /comments/:id        GET         Details for one specific comment
    Edit       /comments/:id/edit   GET         Form to edit specific comment   
    Update     /commnets/:id        PATCH       Updates specific comment on server
    Destroy    /comments/:id        DELETE      Deletes specific item on server
-RESTful comments NEW
-Express redirects
-RESTful comments show
-UUID pakage
-Express method override
-RESTful comments delete
