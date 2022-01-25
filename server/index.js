const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

const port = 4000;

app.use(cors({
  origin: '*'
}));

app.get('/', function(req, res) {
  res.status(200).json({message: 'Hello there!'});
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(port, function() {
   console.log(`listening on *:${port}`);
});