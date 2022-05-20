const user = require('./routes/users');
const express = require('express');
const app = express();
const port = process.env.PORT || 6000;

//mongoose 
const db = require('./config/mongoose');
app.use(express.json());

// GetAll user
// getUser detail by id
// create user
app.use('/api/user', user);

app.listen(port, () => console.log(`Listening on port ${port}...`));









































// const express = require('express');
// const port = 9000;
// const path = require('path');
// const app = express();

// const db = require('./config/mongoose');
// const contact = require('./model/contact')
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.urlencoded());
// app.use(express.static('assets'));
// var contactList =[
//   {
//       name : "Harish",
//       phone : "1111111111"
//   },{
//       name: "Krish",
//       phone : "2222222222"
//   },
//   {
//       name : "Kalpna",
//       phone : "333231233"
//   },
//   {
//       name : "Don",
//       phone : "9319323123"
//   }
// ]
// app.get('/',function(req,res){
//     return res.render('home',{title : "My Contact list"});
// });
// app.get('/contact',function(req,res){
//     return res.render('contact',{title : "practice abc title",
//     contact_list : contactList })
// })
// app.get('/contact',function(req,res){

//     contact.find({},function(err,contacts){
//         if(err){
//             console.log('Error in fetching contact from db');
//             return;
//         }
//         return res.render('contact',{
//             title : "practice abc title",
//         contact_list :  contacts
//     });
// });
// });
// app.get('/form',function(req,res){
//     return res.render('Form',{'bg-color' : "red"
// }
//     )
// })

// app.post('/create_contact',function(req,res){
//     // contactlist.push({
//     //     name: req.body.name,
//     //     phone : req.body.phone
//     // });
//     // console.log(req.body);
//     // contactList.push(req.body);
//     contact.create({
//         name : req.body.name,
//         phone : req.body.phone
//     },function(err,newContact){
//         if(err){
//             console.log('error in create contact list');
//             return;
//         }
//             console.log('*****',newContact);
//             return res.redirect('back')
        
//     });
// });

// // app.get('/delete/contact/:phone',function(req,res){    // params perameters
// //   console.log(req.params);
// //   let phone  = req.params.phone;
// // });

// app.get('/delete-contact/', function(req, res){
//       //get the id from query in the ul
//      let id = req.query.id;
     
//      //find the contact in the database using id and delete 
//      contact.findByIdAndDelete(id,function(err){
//          if(err){
//             console.log('error in deleting from database')  ;
//             return; 
//          }
//          return res.redirect('back');
//      })
// });
// app.listen(port,function(err){
//     if(err){
//         console.log('Error',err);
        
//     }
//     console.log('Server is Running on Port :',port)
// })