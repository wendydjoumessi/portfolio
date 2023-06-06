const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
name: {
  type: String,
  required:[true, "please add a name"]
},
email:{
  type:String,
  required:[true , "please add an email"],
  unique:true,
  trim:true,
  match:[
    /^[a-zA-Z0-9_+&*-]+(?:\\."+"[a-zA-Z0-9-+&*-]+)*@"+"(?:[a-zA-Z0-9-]+\\.)+[a-z"+"A-Z]{2,7}$/,
    "please enter a valid email"
  ]
},

password:{
  type: String,
  required:[true, "please add a password"],
  minlength: [6,"password must be up to 6 character"],
  maxlength: [23,"password must not more than 23 character"],
},
photo:{
  type: String,
  required:[true, "please add a photo"],
  default: "http://i.ibb.co/4pDNDK1/avatar.png"
},

phone:{
  type:String,
  default: "+237"
},

bio:{
  type: String,
  maxlength:[250,"Bio must not be more than 250 characters"],
  default: "bio"
}


},{
  timestamps: true,
})

const User = mongoose.model("User", userSchema )
module.exports = User;