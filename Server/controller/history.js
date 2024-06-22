import historyVideo from "../moduls/history.js";
import mongoose from "mongoose";

export const HistoryController = async(req,res)=>{
    const historyVideoData = req.body;

    console.log(historyVideoData);
    const addToHistory = new historyVideo(historyVideoData);

    try {
        await addToHistory.save();
        res.status(200).json('added to History')
        console.log("DOne")
    } catch (error) {
        res.status(400).json(error)       
    }
}

export const getAllHistoryController = async (req, res)=>{
    try {
      const files= await historyVideo.find();
      res.status(200).send(files)
    } catch (error) {
      res.status(404).send(error.message)
    }
}

export const clearHistoryController = async(req,res) => {
  const { userId: userId } = req.params;
  console.log(userId);
  try {
    await historyVideo.deleteMany({
        Viewer: userId,
    });
    res.status(200).json({ message: "Removed  from your history" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}