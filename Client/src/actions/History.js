import * as api from "../api";

export const addToHistory=(HistoryData)=>async(dispatch)=>{
    try {
        const { data } = await api.addToHistory(HistoryData);
        console.log("Data:",HistoryData);
        dispatch({ type: "POST_History", data });
        dispatch(getAllHistory());
      } catch (error) {
        console.log(error);
      }
}

export const getAllHistory = () => async (dispatch)=>{
    try {
      const {data}= await api.getAllHistory();
      console.log("All WatchVideo:",data);
      dispatch({type:'FETCH_ALL_History',payload:data})
    } catch (error) {
        console.log(error)
    }
  }

  export const clearHistory =(HistoryData)=> async(dispatch)=>{
    try {
        const {userId}=HistoryData;
        await api.clearHistory(userId);
        dispatch(getAllHistory());
    } catch (error) {
        console.log(error)
    }
  }  
