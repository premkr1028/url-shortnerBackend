import mongoose from "mongoose"


const urlSchema = new mongoose.Schema({
  name:{
   type:String,
  },
  shortId : {
    type:String,
    required:true,
    unique:true
  },
  redirectUrl: {
    type:String,
    required:true,
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  qrCode:{
    type:String,
    required:true
  }
  // visitHistory:[{ timestamp : {type : Number} }],

},{
  timestamps:true
}

)
let URL = mongoose.model("url", urlSchema)
export default URL