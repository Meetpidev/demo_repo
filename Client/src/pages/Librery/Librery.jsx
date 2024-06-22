import LeftSideBar from "../../components/leftSidebar/LeftSideBar";
import Histor from "../../components/WatchHistory/WatchHistory";
// import vid from "../../components/videos/vid.mp4";
import { useSelector } from "react-redux";
import "./Librery.css";

export default function Librery(){

    const CurrentUser = useSelector((state) => state?.currentUserReducer);

    const historyList = useSelector(state=>state.historyReducer);
    const likedVideoList = useSelector((state) => state.likedVideoReducer);
    const watchLaterList = useSelector((state) => state.watchLaterReducer);

    // const vids = [
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
            <div className="container_page_app" >
            <LeftSideBar></LeftSideBar>
                <div className="container2_page_app">
                   <div className="librery_container">
                      <h1 className="librery_title">
                        <b>
                        <svg style={{margin:"auto 0.7rem"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><path fill="#ffffff" d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        </b>
                        <b>History</b>
                      </h1>

                    <div className="container_videoList_LibraryPage video_list" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                       <Histor page={""} CurrentUser={CurrentUser?.result._id} video_list={historyList} />
                    </div>

                   </div>

                   <div className="librery_container">
                      <h1 className="librery_title">
                        <b>
                        <svg style={{margin:"auto 0.7rem"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><path fill="#ffffff" d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        </b>
                        <b>Watch Later</b>
                      </h1>

                    <div className="container_videoList_LibraryPage" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                       <Histor page={""} CurrentUser={CurrentUser?.result._id} video_list={watchLaterList} />
                    </div>

                   </div>

                   <div className="librery_container">
                      <h1 className="librery_title">
                        <b>
                        <svg style={{margin:"auto 0.7rem"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><path fill="#ffffff" d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        </b>
                        <b>History</b>
                      </h1>
                    
                    <div className="libb">
                    <div className="container_videoList_LibraryPage">
                       <Histor page={""} CurrentUser={CurrentUser?.result._id} video_list={historyList} />
                    </div>
                    </div>

                   </div>

                   <div className="librery_container">
                      <h1 className="librery_title">
                        <b>
                        <svg style={{margin:"auto 0.7rem"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><path fill="#ffffff" d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        </b>
                        <b>History</b>
                      </h1>

                    <div className="container_videoList_LibraryPage video_list" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                       <Histor page={""} CurrentUser={CurrentUser?.result._id} video_list={historyList} />
                    </div>

                   </div>

                   <div className="librery_container">
                      <h1 className="librery_title">
                        <b>
                        <svg style={{margin:"auto 0.7rem"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><path fill="#ffffff" d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        </b>
                        <b>History</b>
                      </h1>

                    <div className="container_videoList" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                       <Histor page={""} CurrentUser={CurrentUser?.result._id} video_list={historyList} />
                    </div>

                   </div>

                </div>
            </div>
        </>
    )
}