import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'spectra_DEV',
    resource_type: 'video',
    allowed_formats: ["mp4", "avi", "mkv", "wmv", "webm", "mpg", "flv", "mov"],
  },
});

export { cloudinary, storage };
