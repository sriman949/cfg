const router = require('express').Router();
const User = require('../models/user_model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');

const {registerValidation , loginValidation} = require('./validation');

router.post('/register' , async (req , res) =>{
      
       
         //validate a new user
       //const {error} = registerValidation(req.body);
      // if(error) return res.status(400).send({success: false, msg: error})


       //check if user already exists
       const findEmail = await User.findOne({email : req.body.email});
       if(findEmail) return res.status(400).send("Email already exists")



       //hash the password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash( req.body.password , salt);

       //create a new user
   const user = new User({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword,
      role : req.body.role,
      dob: req.body.dob,
      address: req.body.address,
      phone : req.body.phone, 
      description : req.body.description,
      programs: req.body.programs
   });

   try {
      const savedUser = await user.save();
      console.log(savedUser);
      res.send({user : user._id , success : true});
      
   } catch (error) {
      console.log(error);
      res.status(400).send({message : error});
   }

});

router.post('/login' , async(req , res) => {
   //validate a new user
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message)

//check if email exists
const user = await User.findOne({email : req.body.email});
if(!user) return res.status(400).send("Email doesnt exist")


//check if password is correct
const validatePass = await bcrypt.compare(req.body.password , user.password);
if(!validatePass) return res.status(400).send("Password is wrong")


//create and assign a token
const token = jwt.sign({ _id: user._id} , process.env.TOKEN_SECRET)
res.header('auth-token' ,token).send({token : token , success : true});

})

router.get('/fetchMe' , verify , async (req , res) => {
   /*res.send("some data u can access");
   res.send(req.user);*/
 const userfind = await  User.findById(req.user);
   res.json(userfind);
})



module.exports = router;