import LeftSideBar from "../../components/leftSidebar/LeftSideBar";
import ShowVideo from "../../components/ShowVideo/ShowVideo";
import { useSelector } from "react-redux";
// import vid from "../../components/videos/vid.mp4";

import "./Yourvideos.css";

function YourVideos() {

  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === CurrentUser?.result?._id).reverse();
  

//   const vids = [
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
  
        <div className="container2_page_app">
        <div className="container_page_app">
            <LeftSideBar></LeftSideBar>
                <div className="container2_page_app">
                <h2>Your Videos</h2>
                  <ShowVideo vids={vids}></ShowVideo>
                </div>
            </div>
        </div>
</>
  )
}

export default YourVideos