const mongoose=require("mongoose");

const FileSchema=mongoose.Schema({

    file_id: { type: Number, default: 0 },         
    author_id: { type: Number, required: true },   
    author_name: { type: String, required: true },
    email: { type: String, required: true },       
    visibility: { type: String, enum: ['public', 'private'], default: 'private' },  
    created_at: { type: Date, default: Date.now }, 
    updated_at: { type: Date, default: Date.now }, 
    latest_version: { type: String, default: "1.0" }
},{
    timestamp:true
})

module.exports=mongoose.model("File",FileSchema);