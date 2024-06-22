import * as api from "../api";

export const addTolikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const { data } = await api.addToLikedVideo(likedVideoData);
        console.log(likedVideoData);
        dispatch({ type: "POST_LIKEDVIDEO", data });
        dispatch(AlllikeVideo());
      } catch (error) {
        console.log(error);
      }
}

export const AlllikeVideo=()=> async (dispatch)=>{
    try {
      const {data}= await api.AlllikeVideo();
      console.log(data);
      dispatch({type:'FETCH_ALL_LIKED_VIDEOS',payload:data})
    } catch (error) {
        console.log(error)
    }
  }

  // export const deletelikedVideo =(likedVideoData)=> async(dispatch)=>{
  //   try {
  //       const {videoId,Viewer}=likedVideoData;
  //       await api.deletelikedVideo(videoId,Viewer);
  //       dispatch(getAlllikedVideo());
  //   } catch (error) {
  //       console.log(error);
  //       alert(error);
  //   }
  // }