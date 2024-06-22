import watchLaterVideo from "../moduls/watchLater.js";
import mongoose from "mongoose";

export const watchLaterController = async(req,res)=>{
    const watchLatervideoData = req.body;

    console.log(watchLatervideoData);
    const addTowatchLater= new watchLaterVideo(watchLatervideoData);

    try {
        await addTowatchLater.save();
        res.status(200).json('added to watchLater')
        console.log("DOne")
    } catch (error) {
        res.status(400).json(error)       
    }
}

export const getAllwatchLaterController = async (req, res)=>{
    try {
      const files= await watchLaterVideo.find();
      res.status(200).send(files)
    } catch (error) {
      res.status(404).send(error.message)
    }
}

export const deleteController = async(req,res) => {
  const { videoId: videoId, Viewer: Viewer } = req.params;
  console.log(videoId,Viewer)
  try {
    await watchLaterVideo.findOneAndDelete({
      videoId: videoId,
      Viewer: Viewer,
    });
    res.status(200).json({ message: "Removed  from your watch Laters" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}