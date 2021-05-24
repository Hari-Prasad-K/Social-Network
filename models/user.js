const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    pic:{
        type: String,
        default:"https://res.cloudinary.com/dxopkgosy/image/upload/v1621841218/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta_de2qfa.jpg",
    },
    followers:[
        {
            type:ObjectId,
            ref:"User"
        }
    ],
    following:[
        {
            type:ObjectId,
            ref:"User"
        }
    ]

})

module.exports = mongoose.model("User", userSchema);

