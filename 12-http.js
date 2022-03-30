const http = require('http');

//req -> it is the request from client i.e., from web browser to get data or anything from server
//res -> what is been sent from here
const server = http.createServer((req,res) => {
    //console.log(req);
    //res.write('Welcome to home page');
    //res.end();

    //when its base url
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    //when url+about
    if(req.url === '/about')
    {
        res.end('Here is our short history');
    }
    //default case when user access different resource which is not in server
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
})

//port number server is listening to
server.listen(5000);

