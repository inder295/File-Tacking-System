const multer=require("multer");

const track=(req,res)=>{

    
        const { userId, username, email, fileName } = req.body;
    
        if (!userId || !username || !email || !fileName) {
            return res.status(400).json({ error: 'User information and fileName are required.' });
        }
    
        const filePath = path.join('/:id', 'uploads', fileName);
    
       
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error('File not found:', fileName);
                return res.status(404).json({ error: 'File not found.' });
            }
    
           
            const timestamp = new Date().toISOString();
    
           
            const userIp = req.ip || req.connection.remoteAddress;
            const geo = geoip.lookup(userIp) || { city: 'Unknown', country: 'Unknown' };
            const location = `${geo.city}, ${geo.country}`;
    
          
            const activityData = {
                timestamp,
                userId,
                username,
                email,
                location,
                fileName,
            };
    
           
            fs.appendFile('activity-log.txt', JSON.stringify(activityData) + '\n', (err) => {
                if (err) {
                    console.error('Error logging the activity:', err);
                    return res.status(500).json({ error: 'Failed to log activity.' });
                }
    
              
                res.download(filePath, fileName, (err) => {
                    if (err) {
                        console.error('Error downloading the file:', err);
                        return res.status(500).json({ error: 'Failed to download the file.' });
                    }
                });
            });
        });
   
    
}

module.exports={track};