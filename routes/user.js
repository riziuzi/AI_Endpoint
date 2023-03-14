const express = require('express');
const router = express.Router();

router.get('/register', (req,res)=>{res.render("../views/register.ejs")});
router.get('/login', (req,res)=>{res.render("../views/login.ejs")});
router.post('/register', (req,res)=>{
    const {name, email, password, password2} = req.body;
    let errors = [];

    if(!name || !email || !password || !password2)
    {
        errors.push({msg : "Please fill in all fields"});
    }
    
    if(password!=password2)
    {
        errors.push({msg : "Passwords does not match"});
    }

    if(password.length<6)
    {
        errors.push({msg : "Please input the password with length atleast of 6 characters"});
    }

    if(errors.length>0)
    {
        res.render('../views/register.ejs',{
            errors,
            name,
            email,
            password,
            password2
        });
    }
    else{
        res.send('pass');
    }
});

module.exports = router;
