import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home.jsx";
import Librery from "../pages/Librery/Librery.jsx";
import LikedVideos from "../pages/LikedVideos/LikedVideos.jsx";
import WatchLater from "../pages/WatchLater/WatchLater.jsx";
import YourVideos from "../pages/YourVideos/YourVideos.jsx";
import History from "../pages/History/History.jsx";
import PlayList from "../pages/PlayList/PlayList.jsx";
import VideoPage from "../pages/VideoPage/VideoPage.jsx";
import Chanel from "../pages/Chanel/Chanel.jsx";
import Search from "../pages/search/search.jsx";
import Lobby from "../pages/Screens/Lobby.jsx";
import Room from "../pages/Screens/Room.jsx";
import VideoRecord from "../pages/VideoRecord/VideoRecord.jsx";
import "./AllRouts.css";
import Callstream from "../pages/Screens/callstream.jsx";


export default function AllRoutes({setCreatchanel, setvideoUploadPage}){
    return (
        <>
        
        <Routes>
          <Route path="/" element={ <Home></Home>}></Route>
          <Route path="/librery" element={ <Librery ></Librery>}></Route>
          <Route path="/like" element={ <LikedVideos></LikedVideos> }></Route>  
          <Route path="/watchlater" element={ <WatchLater></WatchLater> }></Route>  
          <Route path="/yourvideos" element={ <YourVideos ></YourVideos> }></Route>  
          <Route path="/feed/history" element={ <History ></History> }></Route>  
          <Route path="/feed/playlist" element={ <PlayList ></PlayList> }></Route>  
          <Route path="/videopage/:vid" element={ <VideoPage ></VideoPage> }></Route>  
          <Route path="/chanel/:cid" element={ <Chanel setCreatchanel = {setCreatchanel} setvideoUploadPage = {setvideoUploadPage}></Chanel> }></Route> 
          <Route path="/search/:searchQuery" element={ <Search></Search> }></Route>
          <Route path="/meeting" element={<Lobby></Lobby>}></Route>
          <Route path="/meeting2" element={<Callstream></Callstream>}></Route>
          <Route path="/room/:id" element={<Room></Room>}></Route>
          <Route path="/record" element={<VideoRecord></VideoRecord>}></Route>
        </Routes>

        </>
    )
}