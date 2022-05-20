const {User, validate} = require('../models/usersmodel');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send(User);
});
router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({
     user: req.body.name ,
     username : req.body.username,
     email : req.body.email,
     password : req.body.password,
     refferalBonus : req.body.refferalBonus,
     refferalCode :req.body.refferalCode,
     parentuser:req.body.parentuser,
     childuser :req.body.childuser
    });
  
    //get Calender API and sort out weeked,weekday,nation 
    //example:  https://example.in/api/v3/holiday
    //const value = await response.json();
     //const val = value.days.filter() // nationalday ..weekends ..weeksday
   // console.log(val);

    // switch(Holiday)
    // {
    //     case nationalday: 
    //           return parentuser = refferalBonus
    //         break;
    //     case weekends: 
    //           return  parentuser = refferalBonus
    //         break;
    //     case weeksday: 
    //            return parentuser = refferalBonus;
    //         break;
    //     default: 
    //        return;
    // }


   user = await user.save();
   res.send(user);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).send('Given ID was not found.');

  res.send(user);
});

module.exports = router;




