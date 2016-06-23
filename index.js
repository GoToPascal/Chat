var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var plcount= 0
var playername= [10['AAAAD','anonim']]




app.get('/', function(req, res){
  res.sendFile(__dirname+ '/index.html');
});

io.on('connection', function(socket){
	plcount=plcount+1
	console.log('User conected. Users online: ',plcount);
	
   socket.on('disconnect', function(){
   plcount=plcount-1
   console.log('User disconnected. Users online: ',plcount);
  });
  socket.on('chat message', function(msg){
	  //for (i=0,i<11,i++) 
	  //{ if (playername[i,] != 'anonim') }
  
  
	  {io.emit('chat message',socket.id.toString().substr(socket.id.toString().length-5,socket.id.toString().length)+': '+msg);	}
      //{io.emit('chat message',playername+': '+msg);	}
	//if (playername == 'anonim') 
		//{playername=msg}
  });
});


http.listen(7070, function(){
  console.log('Server online (port:7070)');
});