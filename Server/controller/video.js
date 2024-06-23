import videoFiles from "../moduls/videoFiles.js";
// import cloudinary from 'cloudinary';
// import { PassThrough } from 'stream';

export const uploadvideo = async (req, res) => {
  console.log("executed")
  console.log(req.file);
  if (req.file === undefined) {
    return res.status(404).json({ message: "Please Upload '.mp4' Video File Only" });
  } else {
    res.status(200).send("Video Uploaded Successfully");
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
