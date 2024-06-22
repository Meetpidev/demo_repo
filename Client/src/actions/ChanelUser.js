import * as api from "../api";

export const fetchAllchanel = ()=>async(dispatch)=>{

    try{
        const {data} = await api.fetchAllchanel();
        dispatch({type:"FETCH_CHANELS",payload: data});
    }
    catch(error)
    {
      console.log(error);
    }
    
}

export const updateChanelData=(id,updateData)=> async(dispatch)=>{
    try{
        const {data} = await api.updateChanelData(id,updateData)
        dispatch({type:"UPDATE_DATA",payload: data});
    }
    catch(error){
        alert(error);
    }
}