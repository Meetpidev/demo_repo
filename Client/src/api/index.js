import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:8080` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const uploadVideo = (fileData, fileOption) =>
  API.post("/video/uploadvideo", fileData, fileOption);


export const login = (authData) => API.post("/user/login",authData);

export const updateChanelData = (id,updateData) => API.patch(`/user/update/${id}`,updateData);
export const fetchAllchanel = () => API.get("/user/getAllchanel");



export const getVideos = () => API.get("/video/getvideos");
export const viewsVideo = (id) => API.patch(`/video/view/${id}`);

export const LikeVideo = (id,Like) => API.patch(`/video/like/${id}`,{Like});
export const addToLikedVideo = (likedVideoData) => API.post("/video/likeVideo", likedVideoData);
export const AlllikeVideo = () => API.get("/video/AlllikeVideo");

export const addTowatchLater = (watchLaterData) => API.post("/video/watchLater", watchLaterData);
export const getAllwatchLater = () => API.get("/video/getAllwatchLater");
export const deleteWatchLater = (videoId, Viewer) => API.delete(`/video/deleteWatchlater/${videoId}/${Viewer}`);

export const addToHistory = (HistoryData) => API.post("/video/History", HistoryData);
export const getAllHistory = () => API.get("/video/getAllHistory");
export const clearHistory = (userId) => API.delete(`/video/clearHistory/${userId}`);

export const postComment=(CommentData)=>API.post('/comment/post',CommentData);
export const deleteComment=(id)=>API.delete(`/comment/delete/${id}`);
export const editComment=(id,commentBody)=>API.patch(`/comment/edit/${id}`,{commentBody});
export const getAllComment=()=>API.get('/comment/get');

export const points = (id) => API.post("/user/points", { id });

export const subscribeToChannel = (videoChanel, userId) => API.post('/subscribe/subscrib', { videoChanel, userId });
export const getSubscriptions = (userId) => API.get(`/subscribe/${userId}`);
