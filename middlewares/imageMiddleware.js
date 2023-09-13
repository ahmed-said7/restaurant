const multer=require('multer');
const uuid=require('uuid');
const apiError = require('../utils/apiError');
const asyncHandler=require('express-async-handler');
const sharp = require('sharp');

const uploadImage=()=>{
    const storage=multer.memoryStorage();
    const filter=function(req,file,cb){
        if(file.mimetype.startsWith('image')){
            return cb(null,true);
        }else{
            return cb(new apiError('required file of type image'),false);
        }
    }
    return multer({storage,fileFilter:filter});
};


const uploadMultipleImage=function(field){
    return uploadImage().fields(field);
}


const resizeMultipleImages=(model) => asyncHandler(async(req,res,next)=>{
    if(req.files){
        let filename;
        if(req.files.images){
            req.body.images=[];
            await Promise.all(
                req.files.images.map(async(img)=>{
                    filename=`product-${Date.now()}-${uuid.v4()}.jpeg`;
                    req.body.images.push(filename);
                    return await sharp(img.buffer).resize(600,600).toFormat('jpeg').
                    jpeg({quality:90}).toFile(`uploads/${model}/${filename}`);
                })
            );
        };
    }
    next();
})

module.exports={uploadSingleImage,uploadMultipleImage,resizeSingleImage,resizeMultipleImages};