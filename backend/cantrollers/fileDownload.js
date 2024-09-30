const multer=require("multer");


const download=async (req,res)=>{

   
    try {
        const file_id = req.params.file_id;

       
        const file = await File.findOne({ file_id: file_id });
        if (!file) {
            return res.status(404).json({ error: 'File not found.' });
        }

       
        const filePath = path.join(__dirname, 'uploads', `${file_id}`);

        
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error('File not found on the server:', filePath);
                return res.status(404).json({ error: 'File not found on the server.' });
            }

           
            res.download(filePath, `${file.author_name}-${file_id}.txt`, (err) => {
                if (err) {
                    console.error('Error downloading the file:', err);
                    return res.status(500).json({ error: 'Failed to download the file.' });
                }
            });
        });
        
    } catch (error) {
        console.error('Error retrieving the file:', error);
        return res.status(500).json({ error: 'An error occurred while retrieving the file.' });
    }


}

module.exports={download}



