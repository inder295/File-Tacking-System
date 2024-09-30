const mongoose=require("mongoose");

const TracksSchema=mongoose.Schema({

    timestamp: { type: Date, default: Date.now },  
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  
    username: { type: String, required: true },
    email: { type: String, required: true },      
    location: { type: String, required: false },   
    event_type: { type: String, enum: ['login', 'logout', 'file_download', 'file_edit'], required: true },  
    file_id: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: false } 
})

module.exports=mongoose.model("Tracks",TracksSchema);