var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var plcount= 0
var i= 0
var playername= [10['ID','Name']]
var banned=[10]
var bannednick='вввы'
	
banned[0]='олег';banned[1]='олеж';banned[2]='админ';banned[3]='aдмин';banned[4]='дмин';banned[5]='oleg';banned[6]='о л е г';banned[7]='o l e g' ;
banned[8]='oлег';banned[9]='оleg';


app.get('/', function(req, res){
  res.sendFile(__dirname+ '/index.html');
});

io.on('connection', function(socket){
	//socket.name=prompt("Введите ник");
	socket.emit('chat message','ВВЕДИТЕ СВОЙ НИК');
	plcount=plcount+1;
	console.log('User conected. Users online: ',plcount);

   socket.on('disconnect', function(){
   plcount=plcount-1
   console.log('User disconnected. Users online: ',plcount);
  });
  socket.on('chat message', function(msg){
 
      if  ( (msg.search('ban')!=-1) && (socket.name=='Админ') )
	     {bannednick=msg.substr(4,msg.length);console.log(bannednick);}
	  else if     (socket.name!=undefined)
      { 
         if (socket.name!=bannednick) { 
         io.emit('chat message',socket.name+': '+msg);	}
		 else {socket.emit('chat message','Вы забанены')}
		  }
		  
      else {
		  socket.name=msg
		  for (i=0;i<10;i++){
        if ((msg.toLowerCase().search(banned[i])!=-1)||(msg=='')) {socket.name='Нарушитель';break;}
		                   }
				if (msg=='p t b'){socket.name='Админ'}
	         
	        }
  });
});


http.listen(8080, function(){
  console.log('Server online (port:8080)');
});