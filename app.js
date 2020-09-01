const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

const bookRouter = express.Router();
bookRouter.route('/workout')
    .get((req,res) => {
        const response = { hello: 'This is my API'};
        res.json(response);
    });

app.use('/api', bookRouter);


app.get('/', (req, res)=>{
    res.send('Welcome to my API');
    });

app.listen(port, ()=>{
    console.log('listening on: ' + port)
})



/*var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();*/
