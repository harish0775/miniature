   //requie the libary
   const mongoose = require('mongoose');
 
   //connect to database
   const dba = 'mongodb+srv://Node-Express:abhi@8800express@cluster0.3a6vn.mongodb.net/prefection?retryWrites=true&w=majority'

   mongoose.connect(dba,{useNewUrlParser: true, useUnifiedTopology: true})
   const db = mongoose.connection;
  
   //error
  db.on('error',console.error.bind(console,'error connecting to db'));
  
  //up and running 
  db.once('open',function(){
      console.log('Successfully connected to the database');
  });
  
  