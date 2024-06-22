import { useEffect, useState } from "react";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useDispatch,useSelector } from "react-redux";
import { likeVideo } from "../../actions/Video.js";
import "./btns.css";
import { addToLikedVideo } from "../../api/index.js";
import { addTowatchLater, deleteWatchLater } from "../../actions/watchLater.js";
// import videoFiles from "../../../../Server/moduls/videoFiles";

function Btns({vv,vid}) {

  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const dispatch = useDispatch();

    const [SAveVideo, setSAveVideo] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    // const [Count, setCount] = useState(0);

    const likedVideoList = useSelector(state=>state.likedVideoReducer);
    const Watchlater_video = useSelector(state=>state.watchLaterReducer);

    useEffect(()=>{
      likedVideoList?.data
        .filter(
          (q)=>q?.videoId === vid && q?.viewer === CurrentUser?.result._id
        ).map((m) => setLikeBtn(true) );

        Watchlater_video?.data
        .filter(
          (q)=>q?.videoId === vid && q?.viewer === CurrentUser?.result._id
        ).map((m) => SAveVideo(true) );
    },[]);
    
    let handleSave = () => {
      if (CurrentUser) {
        if (SAveVideo) {
          setSAveVideo(false);
          dispatch(deleteWatchLater({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          }));
          console.log("Current User:", CurrentUser);
          console.log("UserId:", CurrentUser?.result._id);
        } else {
          setSAveVideo(true);
          dispatch(addTowatchLater({
            videoId: vid,
            Viewer: CurrentUser?.result?._id,
          }));
          console.log("Toggle Save:", vid);
          console.log("Current result id:", CurrentUser?.result?._id);
        }
      }
     else{
       alert("You Are Not Log In");
    }
  }

    let handlelikes = (e,lk) => {
      if(CurrentUser)
        {
      if(LikeBtn){
        setLikeBtn(false);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
      }

      else{
        setLikeBtn(true);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk + 1,
          })
        );
        dispatch(
          addToLikedVideo({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          })
        );
        
      }
    } else{
      alert("You Are Not Log In");
    }
  }
    let handleDislikes = (e,lk) => {
      if(CurrentUser)
        {
       
      if(DislikeBtn){
       setDislikeBtn(false);
      }
      else{
        setLikeBtn(false);
        setDislikeBtn(true);
        if(LikeBtn){
          dispatch(
            likeVideo({
              id: vid,
              Like: lk - 1,
            })
          );
        }
      }
      
    }else{
      alert("You Are Not Log In");
    }
  }

    // let handleCount = () => {
    //   LikeBtn ? setCount(Count+1) : ""
    // }
 
  return (
    <>
      <div className="btn-page">
        <div className="btn_video_page">
          <svg style={{marginRight:"1.125rem"}} xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
        </div>

        <div className="btn_video_page">

        <div className="like_video_page">
            
            {
              LikeBtn ? (
                    <>
                      <span 
                      className="like" 
                      onClick={(e) => {handlelikes(e,vv.Like)}}>
                      <ThumbUpIcon></ThumbUpIcon>
                      </span>
                      <span><b>{vv.Like}</b></span>
                    </>
                ) : (
                    <>
                     <span 
                     className="like"
                     onClick={(e) => 
                     {handlelikes(e,vv.Like)}}>
                     <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                     </span>
                     <span><b>{vv.Like}</b></span>
                    </>  
                )
               
            }
           </div>
           
        <div className="like_video_page">
            
            {
                DislikeBtn ? (
                    <>
                      <span 
                      className="Dislike" 
                      onClick={(e) => 
                      handleDislikes(e,vv.Like)}>
                      <ThumbDownAltIcon></ThumbDownAltIcon>
                      </span>
                      <span><b></b></span>
                    </>
                ) : (
                    <>
                     <span className="Dislike" onClick={(e) => handleDislikes(e,vv.Like)}><ThumbDownOffAltIcon></ThumbDownOffAltIcon></span>
                    </>  
                )
               
            }
            <b>Dislike</b>
           </div>

           <div className="like_video_page">
            
            {
                SAveVideo ? (
                    <>
                       <svg  className="btns_video_page" onClick={() => handleSave()} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect fill="#ffffff" height="2" width="11" x="3" y="10"/><rect fill="#ffffff" height="2" width="11" x="3" y="6"/><rect fill="#ffffff" height="2" width="11" x="3" y="6"/><rect fill="#ffffff" height="2" width="7" x="3" y="14"/><polygon fill="#ffffff" points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34"/></g></g></svg>
                       <b style={{margin:"auto"}}>Saved</b>
                    </>
                ) : (
                    <>
                     <svg  className="btns_video_page" onClick={() => handleSave()} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path  fill="#ffffff" d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"></path></svg>
                     <b style={{margin:"auto"}}>Save</b>
                    </>
                )
            }
           </div>
           
           <div className="like_video_page">
              <>
                <svg style={{margin:"auto"}} xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                <b style={{margin:"auto",paddingLeft:".5rem"}}>Thanks</b>
              </>
           </div>

           <div className="like_video_page">
              <>
                <svg style={{margin:"auto"}} xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                <b style={{margin:"auto", paddingLeft:".5rem"}}>Share</b>
              </>
           </div>
           

          
        </div>

      </div>
    </>
  )
}

export default Btns