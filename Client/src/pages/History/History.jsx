import WatchHistory from "../../components/WatchHistory/WatchHistory";
import { useSelector } from "react-redux";
// import vid from "../../components/videos/vid.mp4";

export default function History(){

    const historyList = useSelector(state=>state.historyReducer);

// const Watchhistory = [historyReducer
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
           
          <WatchHistory page={"History"} video_list={historyList}></WatchHistory>
               
        </>
    )
}
