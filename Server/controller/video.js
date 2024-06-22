import videoFiles from "../moduls/videoFiles.js";
import cloudinary from 'cloudinary';

export const uploadvideo = async (req, res) => {
    console.log("executed")
    console.log(req.file);
  if (req.file === undefined) {
    return res.status(404).json({ message: "Please Upload '.mp4' Video File Only" });
  } else {
    try {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "video" },
        async (error, result) => {
          if (error) {
            return res.status(400).send(error.message);
          }

          const file = new videoFiles({
            videoTitle: req.body.title,
            fileName: req.file.originalname,
            filePath: result.secure_url,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            videoChanel: req.body.chanel,
            Uploader: req.body.Uploader,
          });

          const newFile = await file.save();
          res.status(200).send("Video Uploaded Successfully");
        }
      );

      const bufferStream = require('stream').PassThrough();
      bufferStream.end(req.file.buffer);
      bufferStream.pipe(uploadStream);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

export const getAllvideos = async (req, res) => {
  try {
    const files = await videoFiles.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
