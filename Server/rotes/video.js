import express from "express";
import { uploadvideo, getAllvideos } from "../controller/video.js";
import { likeController } from "../controller/like.js";
import { viewController } from "../controller/views.js";
import { likeVideoController, AlllikeVideoController } from "../controller/likevideo.js";
import { watchLaterController, getAllwatchLaterController, deleteController } from "../controller/watchLater.js";
import { HistoryController, getAllHistoryController, clearHistoryController } from "../controller/history.js";
import upload from "../helpers/fileHelpers.js";
import auth from "../middleware/auth.js";

const routes = express.Router();

const mid1 = (req,res, next)=>{
    console.log("check 1");
    next();
}
const mid2 = (req,res, next)=>{
    console.log("check 2");
    next();
}


routes.post("/uploadvideo" ,upload.single("file"), uploadvideo);
// routes.post("/uploadvideo",auth ,upload.single("file"), uploadvideo);
routes.get("/getvideos", getAllvideos);




// routes.post("/uploadvideo", mid1,upload.single("file"),(req,res,next)=>{
//     console.log(req.file);
//     next();
// },mid2,uploadvideo);
// routes.post("/uploadvideo", mid1,upload.single("file"),mid2,uploadvideo);

routes.get("/getvideos",getAllvideos);
routes.patch("/like/:id", likeController );
routes.patch('/view/:id',viewController);

routes.post("/likeVideo",auth,likeVideoController);

routes.get("/AlllikeVideo",AlllikeVideoController);

routes.post("/watchLater",auth,watchLaterController);
routes.get("/getAllwatchLater",getAllwatchLaterController);
routes.delete("/deleteWatchlater/:videoId/:Viewer",auth,deleteController);

routes.post("/History",auth,HistoryController);
routes.get("/getAllHistory",getAllHistoryController);
routes.delete("/clearHistory/:userId",auth,clearHistoryController);

export default routes;