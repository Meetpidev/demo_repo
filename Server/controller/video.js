import videoFiles from "../moduls/videoFiles.js";
import { cloudinary } from "../cloudConfig.js";

// import { PassThrough } from 'stream';

export const uploadvideo = async (req, res) => {
  console.log("executed")
  console.log(req.file);

  if (req.file === undefined) {
    return res.status(404).json({ message: "Please Upload '.mp4' Video File Only" });
  } 
  else {
    try{ 
      const result = await cloudinary.uploader.upload(req.file.path, {
                resource_type: 'video',
              });
              console.log("Result:",result);
                  const file = new videoFiles({
                      videoTitle: req.body.title,
                      fileName: req.file.originalname,
                      filePath: result.secure_url,
                      fileType: req.file.mimetype,
                      fileSize: req.file.size,
                      videoChanel: req.body.chanel,
                      Uploader: req.body.Uploader,
                  })
                  await file.save();
    res.status(200).send("Video Uploaded Successfully");
  }
  catch(error){
                console.log(error);
                res.status(400).send(error.message);
            }
}};

export const getAllvideos = async (req, res) => {
  try {
    const files = await videoFiles.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(404).send(error.message);
  }

};
// import videoFiles from "../moduls/videoFiles.js";
// import cloudinary from '../cloudConfig.js';

// export const uploadvideo = async (req, res) => {
//   console.log("executed");
//   console.log(req.file);

//   if (req.file === undefined) {
//     return res.status(404).json({ message: "Please upload a '.mp4' video file only" });
//   } else {
//     try {
//       const result = await cloudinary.uploader.upload(req.file.path, {
//         resource_type: 'video',
//         folder: 'spectra_DEV',
//       });

//       const file = new videoFiles({
//         videoTitle: req.body.title,
//         fileName: req.file.originalname,
//         filePath: result.secure_url,
//         fileType: req.file.mimetype,
//         fileSize: req.file.size,
//         videoChanel: req.body.chanel,
//         Uploader: req.body.Uploader || "Xyz",
//       });

//       await file.save();
//       res.status(200).send("Video uploaded successfully");
//     } catch (error) {
//       console.log(error);
//       res.status(400).send(error.message);
//     }
//   }
// };

// export const getAllvideos = async (req, res) => {
//   try {
//     const files = await videoFiles.find();
//     res.status(200).send(files);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// };
