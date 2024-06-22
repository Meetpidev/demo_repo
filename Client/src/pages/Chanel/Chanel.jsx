import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import LeftSideBar from "../../components/leftSidebar/LeftSideBar";
import ShowVideo from "../../components/ShowVideo/ShowVideo";
// import vid from "../../components/videos/vid.mp4";
import Chanel_Description from "./Chanel_Description";
import "./Chanel.css";


function Chanel({setCreatchanel, setvideoUploadPage}) {

  const {cid} = useParams();

  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === cid)

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
    <div className="chanel_container">
    <LeftSideBar></LeftSideBar>

      <div className="chanel_container2">
      <Chanel_Description setCreatchanel={setCreatchanel} cid={cid} setvideoUploadPage = {setvideoUploadPage}></Chanel_Description>
        <ShowVideo vids={vids}></ShowVideo>
      </div>

    </div>
   </>
  )
}

export default Chanel