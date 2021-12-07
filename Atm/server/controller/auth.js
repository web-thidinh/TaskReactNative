const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// Register
const register = async(req, res, next) => {
    console.log('Clicked')
    console.log(req.body)
    const {useremail, userpassword} = req.body
    try{
        const checkEmail = await User.findOne({email: req.body.useremail});
        const hashedPassword = await bcrypt.hash(userpassword, 10);
        if(checkEmail){
            throw new Error("email already exists !")
        }
        const user = new User({
            email: useremail,
            password: hashedPassword 
        })
        await user.save()

        const PRIVATE_TOKEN = jwt.sign(
            {userId: user._id},
            process.env.ACCESS_TOKEN_SECRET,
        );
            console.log('Success')
        return res.json({
            message: 'Register successfully !',
            user: user.toJSON(),
            PRIVATE_TOKEN
        });
    }catch(err){
        res.json(err.message) 
    }      
}

// Login  
const login = async(req, res, next) => {
    console.log('Submited')
    console.log(req.body)
    const {useremail, userpassword} = req.body
    try{  
        const user = await User.findOne({email: useremail});
        if(user && (await bcrypt.compare(userpassword, user.password))){
            const PRIVATE_TOKEN = jwt.sign( 
                {userId: user._id},  
                process.env.ACCESS_TOKEN_SECRET,
            );
            console.log('success')
            return res.json({
                message: 'Login successfully !',
                user: user.toJSON(), 
                PRIVATE_TOKEN  
            }); 
            
        }
        console.log('failed')
        res.json({ 
            message: 'Wrong password !',
            sign: false
        });
    }catch(err){
        return res.json(err.message)
    }
}


module.exports = {
                register,
                login
                }