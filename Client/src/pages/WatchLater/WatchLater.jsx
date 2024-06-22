import LeftSideBar from "../../components/leftSidebar/LeftSideBar";
import Watchlater from "../../components/WatchHistory/WatchHistory";
// import vid from "../../components/videos/vid.mp4";

import "./WatchLater.css";
import { useSelector } from "react-redux";

function WatchLater() {
    
    const Watchlater_video = useSelector(state=>state.watchLaterReducer);
    console.log(Watchlater_video);
//   const Watchlater_video = [
//     {   
//         _id: 1,
//         video_src: vid,
//         title: "video 1",
//         Uploader: "Meet Shah",
//         description: "Description of video 1"
//     },
//     {
//         _id: 2,
//         video_src: vid,
//         chanel: "cdd",
//         title: "video 2",
//         Uploader: "Rushikesh Mayatra",
//         description: "Description of video 2"
//     },
//     {
//         _id: 3,
//         video_src: vid,
//         chanel: "add",
//         title: "video 3",
//         Uploader: "Parth Soni",
//         description: "Description of video 3"
//     },
//     {
//         _id: 4,
//         video_src: vid,
//         chanel: "add",
//         title: "video 4",
//         Uploader: "Parth Soni",
//         description: "Description of video 3"
//     },
// ]

  return (
    <>
    <div className="container_page_app">
    <LeftSideBar></LeftSideBar>
        <div className="container2_page_app">
            <Watchlater page={"Watch Later"} video_list={Watchlater_video}></Watchlater>
        </div>
    </div>
</>
  )
}

export default WatchLater