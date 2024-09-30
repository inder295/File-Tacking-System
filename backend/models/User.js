const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    
    
    user_id: { type: mongoose.Schema.Types.ObjectId, auto: true },  
    username: { type: String, required: true, unique: true },       
    email: { type: String, required: true, unique: true },          
    password: { type: String, required: true },                    
    role: { type: String, enum: ['user', 'admin'], default: 'user' },                    
    credits: { type: Number, default: 10 },                        
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }], 
    status:{type:Number,default:0}
    
})

module.exports=mongoose.model("User",UserSchema);