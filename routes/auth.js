const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {JWT_SECRET}=require("../config/database")
const requireLogin = require("../middleware/requireLogin")

router.get("/",(req,res)=>{
    res.send("Hello")
})

router.post("/signup",(req,res)=>{ 

    const {name,email,password,pic} = req.body

    if(!email || !name || !password){
        return res.status(422).json({error:"All Fields are Mandatory"})
    }
    else{ console.log("Your data add successfully")}

    User.findOne({email: email}).then((savedUser)=>{
        if(savedUser)
            return res.status(422).json({error:"Email Already Exists"})
        bcrypt.hash(password,10).then((hashedPassword)=>{
            const user = new User({
                email,name,password:hashedPassword,pic
        })    
        user.save()
        .then(user=>{
            res.json({message:"Saved Successfully"})
        }).catch(err=>{
            console.log(err)
        })
        })
          
}).catch(err=>{
    console.log(err)
})
})

router.post("/signin",(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.json({error:"All fields are mandatory"})
    }
    User.findOne({email:email}).then(savedUser=>{
        if(!savedUser)
            return res.json({error:"User Doesn't Exists"})
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // return res.json({message:"Successfully Signin"})
                const token = jwt.sign({_id: savedUser._id},JWT_SECRET)
                const {_id,name,email,followers,following,pic}= savedUser
                res.json({token,user:{
                    _id,name,email,followers,following,pic
                }})
            }
            else 
                return res.json({error:"Invalid Email or Password"})
        })
        .catch(err=>{
            console.log(err);
        })
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/protected',requireLogin,(req,res)=>{
    res.send("Hello User")
})

module.exports = router