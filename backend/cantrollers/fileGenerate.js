const multer=require("multer");


const generate=async (req,res)=>{

   
        try {
           
            const { author_id, author_name, email, visibility } = req.body;
    
            
            if (!req.file) {
                return res.status(400).json({ error: 'File is required.' });
            }
    
            
            const filePath = path.join('/:id/uploads', 'uploads', req.file.filename);
    
            
            const fileCount = await File.countDocuments();  
            const file_id = fileCount + 1;
    
            
            const newFile = new File({
                file_id: file_id,
                author_id: author_id,
                author_name: author_name,
                email: email,
                visibility: visibility || 'private',
                latest_version: "1.0",
                created_at: Date.now(),
                updated_at: Date.now()
            });
    
            
            await newFile.save();
    
            return res.status(201).json({
                message: 'File and metadata created successfully',
                fileMetadata: newFile,
                filePath: filePath
            });
        } catch (error) {
            console.error('Error creating file:', error);
            return res.status(500).json({ error: 'An error occurred while creating the file.' });
        }
   
    

   
}
module.exports={generate};