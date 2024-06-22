import { useSelector } from "react-redux";
import VideoShowCase from "../VideoShowCase/VideoShowCase";
// import vid from "../videos/vid.mp4";

function ShowWatchhistory({videoId}) {

    const vids = useSelector(s=>s.videoReducer)
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
         <div className='show_container'>
        {
          vids?.data?.filter(q=>q._id===videoId).map(vi=>
            {
                return (
                    <div key={vi._id} className="video_box">
                        <VideoShowCase vid={vi}/>
                    </div>
                )
            })  
        }
    </div>
    </>
  )
}

export default ShowWatchhistory