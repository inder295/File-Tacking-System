const express=require('express');
const multer=require("multer");
const { generate } = require('../cantrollers/fileGenerate');
const { download } = require('../cantrollers/fileDownload');
const { track } = require('../cantrollers/trackFile');

const router=express.Router();
const upload=multer();


router.post("/generate",upload.single('file'),generate);

router.get("/download/:id",download);

router.put('/track',track);

module.exports=router;