import * as api from "../api";

export const addTowatchLater=(watchLaterData)=>async(dispatch)=>{
    try {
        const { data } = await api.addTowatchLater(watchLaterData);
        console.log("Data:",watchLaterData);
        dispatch({ type: "POST_WATCHLATER", data });
        dispatch(getAllwatchLater());
      } catch (error) {
        console.log(error);
      }
}

export const getAllwatchLater = () => async (dispatch)=>{
    try {
      const {data}= await api.getAllwatchLater();
      console.log("All WatchVideo:",data);
      dispatch({type:'FETCH_ALL_WATCHLATER',payload:data})
    } catch (error) {
        console.log(error)
    }
  }

  export const deleteWatchLater =(watchLaterData)=> async(dispatch)=>{
    try {
        const {videoId,Viewer}=watchLaterData;
        await api.deleteWatchLater(videoId,Viewer);
        dispatch(getAllwatchLater());
    } catch (error) {
        console.log(error)
    }
  }  
