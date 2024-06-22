import LeftSideBar from "../../components/leftSidebar/LeftSideBar";
import LikeHistory from "../../components/WatchHistory/WatchHistory";
// import vid from "../../components/videos/vid.mp4";
import { useSelector } from "react-redux";


function LikedVideos() {

    const likedVideoList = useSelector(state=>state.likedVideoReducer);
    console.log(likedVideoList);

//   const LikedVideos = [
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
            <LikeHistory page={"Liked Videos"} video_list={likedVideoList}></LikeHistory>
        </div>
    </div>
</>
  )
}

export default LikedVideos