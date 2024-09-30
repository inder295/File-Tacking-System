const mongoose=require("mongoose");

const ProjectSchema=mongoose.Schema({
    
    project_id: { type: Number, default: 0 },  
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  
    author_name: { type: String, required: true }, 
    visibility: { type: String, enum: ['public', 'private'], default: 'private' },  
    created_at: { type: Date, default: Date.now },  
    updated_at: { type: Date, default: Date.now },  
    latest_file: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true } 
})

module.exports=mongoose.model("Project",ProjectSchema);