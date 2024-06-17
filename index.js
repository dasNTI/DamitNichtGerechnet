const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html')
    res.end();
});
app.use('/static', express.static('/static'));

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('message', msg => {
        
    });
});