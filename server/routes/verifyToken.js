
const jwt = require('jsonwebtoken');

module.exports =  function(req , res , next) {
     const token = req.header('auth-token');
     if(!token) return res.status(401).send("acess denied");


     try {
         const verified = jwt.verify(token , process.env.TOKEN_SECRET)
         req.user = verified;
         next(); // we get the payload back 
     } catch (error) {
         res.status(400).send("error")
     }
}


// use this in private route whenever  u have to ost by a particular user