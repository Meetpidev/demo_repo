import Btns from "./btns.jsx";
import { useSelector, useDispatch } from "react-redux";
import Comments from "../../components/comments/comments.jsx";
import "./VideoPage.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useState, useEffect } from "react";
import { addToHistory } from "../../actions/History.js";
import { viewVideo } from "../../actions/Video.js";
import { useRef } from 'react';
import { subscribeToChannel } from "../../actions/Subscrbe.js";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';
import VideoShowCase from "../../components/VideoShowCase/VideoShowCase.jsx";
import axios from 'axios';

function VideoPage() {

  const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '869c3f013c150818e8de43cfa1a7a3f2';

  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const videoRef = useRef(null);
   
  const {vid} = useParams();
  // console.log("video id is ",vid);
  const vids = useSelector(state=>state.videoReducer);
  console.log(vids?.data);
  
  const [Latitude,setLetitude] = useState("");
  const [Longitude,setLongitude] = useState("");
  const [temperature, setTemperature] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [city,setcity]= useState("");
  const [isDownloadable, setIsDownloadable] = useState(false);
  const [subscribe,setsubscribe] = useState(false);

  const [index, setIndex] = useState(
    vids?.data.findIndex((q) => q._id === vid)
  );

  console.log(index);
 
  const [Vvv, setVvv] = useState(vids.data[index]);
  const sz = vids.data.length;
  console.log(sz)
  console.log("before", Vvv.filePath);
  const normalizeFilePath = (filePath) => {
    // Replace backslashes with forward slashes
    return filePath.replace(/\\/g, "/");
  };

  normalizeFilePath(Vvv.filePath);
  console.log("after", Vvv.filePath);
  

  useEffect(() => {
    setVvv(vids.data[index]);
  }, [index]);


    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUserReducer);

    const userId = currentUser?.result?._id;

    const handleViews=()=>{
      dispatch( viewVideo({
        id:vid
      }))
    }
  
    let handleHistory = () => {
      dispatch(
        addToHistory({
            videoId: vid,
            Viewer: CurrentUser?.result?._id,
        })
      )

    }
    useEffect(() => {
      if(CurrentUser)
        {
          handleHistory();
        }
        handleViews();
    }, []);
    
    // console.log("idex:",index)
    const handleNextVideo = () => {
      if (index + 1 < sz) {
        setIndex((preindex) => preindex + 1);
        console.log("if")
      } else {
        setIndex(0);
        console.log("else")
      }
      console.log("next video")
    };
  
    const handleShowComments = () => {
      console.log("Show comments");
    };
  
    const handleShowLocation = () => {
      navigator.geolocation.getCurrentPosition((position)=>{
        const { latitude, longitude } = position.coords;
        setLetitude(latitude);
        setLongitude(longitude);

        axios
        .get(`${API_ENDPOINT}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units={standard}`)
        .then((response) => {
          console.log(response.data.name);
          setcity(response.data.name);
          setTemperature(response.data.main.temp);
          console.log(temperature);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 5000);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    });
  };

 {
    if(showPopup)
      {
        alert(`Your Current Location is: ${city} and The temparature in ${city} is ${temperature}`);
      }
      else{
        console.log("Nothing")
      }
    }
  
    const handleCloseWebsite = () => {
      window.close();
      console.log("Close website");
    };

    const isdownloadclick = () => {
      setIsDownloadable(true);
    }

    const handleDownload = async () => {
      if (!isDownloadable) {
        return; // Prevent download if not allowed
      }
  
      const videoUrl = `http://localhost:8080/${vv?.filePath}`; // Replace with your video URL format
      const filename = `${vv?.videoTitle}.mp4`; // Customize filename if needed
  
      try {
        const response = await fetch(videoUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href); // Revoke temporary URL
      } catch (error) {
        console.error('Error downloading video:', error);
        // Handle download error gracefully (e.g., display an error message to the user)
      }
    };
    
    const myBtnRef = useRef(null);

    let changebtn = () => {

      const btn = myBtnRef.current;

      if(subscribe){
        btn.innerHTML = "Subscribe";
      }
      else{
        btn.innerHTML = "UnSubscribe";
      }

    }
    const handleSubscribe = () => {
      if (CurrentUser) {
        setsubscribe(true);
        if(subscribe){
        dispatch(subscribeToChannel(vv?.videoChanel, CurrentUser?.result._id));
        alert("Subscribed to channel! You'll receive notifications for new videos.");
        }
        else{
          setsubscribe(false);
        }
      } else {
        alert("Please log in to subscribe to the channel.");
      }
    }
  // console.log("Vids: ",vids);

  const vv = vids?.data.filter((q) => q._id === vid)[0];
  
  console.log(vv);

  const videoSize = vv?.fileSize ? `${Math.floor(vv?.fileSize / 1024 / 1024)} MB` : 'Unknown'; // Convert to MB and format


  // const chanels = useSelector(state=>state?.chanellReducer);
    // console.log("Channels:",chanels);

    // const CurrentChanel = chanels.filter(e=>e._id===vid)[0];

  return (
   <>
  
     <div className="video_container_page">
       <div className="video2_container_page">
         <div className="video_paly">
          <div className="video_showcase">
           <VideoPlayer 
            videoSrc={`http://localhost:8080/${vv?.filePath}`}
            nextVideo={handleNextVideo}
            showComments={handleShowComments}
            showLocation={handleShowLocation}
            closeWebsite={handleCloseWebsite} 
            className="video_play_screen"
           ></VideoPlayer>
           </div>

          <div className="video_description_2">
              <div className="video_title_div_2">
                 <p className="video_title_2">{vv?.videoTitle}</p>
                   <div className="time_to_upload">
                      <div className="view_pages">Views:&nbsp;
                       {vv?.Views} <div className="dot"></div> {vv?.Uploader} {moment(vv?.createdAt).fromNow()}
                       </div>
                       <Btns vv={vv} vid={vid}></Btns>
                   </div>
                  </div>
                  
            <div className="chanel_details">
            
                <div className="chanle_logo">
                  <b className="chanel-logo">
                 
                    <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                  </b>
                <p className="chanel_name">{vv?.Uploader}</p>

                <div className="sub-btn" onClick={handleSubscribe}>
                  <button id="sub-btn" ref={myBtnRef} onClick={()=>changebtn()}>Subscribe</button>
                </div>

                <div className="dlod-btn">

                    <div className="dloa_btn"  onClick={()=>{handleDownload(),isdownloadclick()}}>
                        
                        <div className="button" data-tooltip={`Size:${videoSize}`}>
                          <div className="button-wrapper">
                            <div className="text">Download</div>
                              <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                              </span>
                            </div>
                          </div>

                    </div>

                </div>

                </div>
         
            </div>

            <div className="comments_box">
                <h2>Comments</h2>
                <Comments videoId={vv._id}></Comments>
            </div>

          </div>
        </div>

          <div className='more_videos'>
        {
          vids?.data?.map(vi=>
            {
                return (
                    <div key={vi._id} className="video_box">
                        <VideoShowCase vid={vi}/>
                    </div>
                )
            })  
        }
       </div>
         </div>
       </div>
   </>
  )
}

export default VideoPage