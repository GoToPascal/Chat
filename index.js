var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var plcount= 0
var i= 0
var playername= [10['ID','Name']]
var banned=[4[' ']]



app.get('/', function(req, res){
  res.sendFile(__dirname+ '/index.html');
});

io.on('connection', function(socket){
	plcount=plcount+1
	console.log('User conected. Users online: ',plcount);
		  //for (i=0,i<11,i++) 
//{ if (playername[i[0]] == '')
//	{playername[i[0]]=socket.id.toString().substr(socket.id.toString().length-5,socket.id.toString().length);
//break}}	
	//});
   socket.on('disconnect', function(){
   plcount=plcount-1
   console.log('User disconnected. Users online: ',plcount);
  });
  socket.on('chat message', function(msg){
 
     // for (i=0,i<11,i++)
	  //{ if (playername[i[0]] == socket.id.toString().substr(socket.id.toString().length-5),socket.id.toString().length)
		 // {if (playername[i[1]]=='') {playername[i[1]]=msg; break;}  
		  //else {io.emit('chat message',playername[i[1]],+': '+msg);	break;}
		//  }
	//  }		 
	  if     (socket.name!=undefined)
      { 
         io.emit('chat message',socket.name+': '+msg);	
		  }
		  
      else {
		  for (i=0;i<4;i++){
        if (msg==banned[i]){msg='Нарушитель'}
		                   }
	         socket.name=msg
	        }
  });
});


http.listen(8080, function(){
  console.log('Server online (port:8080)');
});