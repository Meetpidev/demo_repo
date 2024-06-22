"use strict";
import multer from "multer";
import { storage } from "../cloudConfig.js";

const filefilter=(req,file,cb)=>{
    if(file.mimetype === "video/mp4"){
        cb(null,true);
    }else{
        cb(null,false);
    }
}
const upload = multer({ storage:storage,fileFilter:filefilter });

export default upload;

