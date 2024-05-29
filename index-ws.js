const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/', function(req,res){
    res.sendFile('index.html', {root: __dirname});
});

server.on('request', app);

server.listen(3000,() => {console.log('Server started on port  3000!')});

/* Begin websocket */
const webSockeServer = require('ws').Server;

const wss = new webSockeServer({server: server});

wss.on('connection', function connection(ws){
    const numClients = wss.clients.size;
    console.log('Clients Connected: ' + numClients);

    wss.broadcast(`Current visitors: ' ${numClients}`);

    if (ws.readyState === ws.OPEN){
        ws.send('Welcome to cyber chat!');
    }
    
    ws.on('close',function close(){
        wss.broadcast(`Current visitors: ${numClients}`);
        console.log('Client disconnected');
    })
})

wss.broadcast = function broadcast(data){
    wss.clients.forEach(function each(client){
        if(client.readyState === client.OPEN){
            client.send(data);
        }
    });
}