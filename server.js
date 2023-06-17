

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(express.static('public'));


io.on('connection', (socket) => {
  console.log('A client connected');

 
  socket.on('dataUpdate', (data) => {
    
    io.emit('dataUpdate', data);
  });

  
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});


app.get('/1', (req, res) => {
  res.sendFile(__dirname + '/public/page1.html');
});

app.get('/2', (req, res) => {
  res.sendFile(__dirname + '/public/page2.html');
});


const port = 3000;
http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
