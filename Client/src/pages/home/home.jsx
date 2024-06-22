import ShowVideo from "../../components/ShowVideo/ShowVideo";
import LeftSideBar from "../../components/leftSidebar/LeftSideBar";
// import vid from "../../components/videos/vid.mp4";
import { useSelector } from "react-redux";
import "./home.css";

export default function Home(){

  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse() || [];
  // console.log(vids);

    //     const vids = [
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
    
     
  const NavList = [
    "React routers",
    "News",
    "Comedy Nights With Kapil",
    "Website",
    "Music",
    "Animation",
    "Gaming",
    "Chess",
    "Sitcoms",
    "Mixes",
    "Villa",
    "Data Structure",
    "Astrological signs",
    // "Live",
    // "Cricket",
  ];
  
  // "Thoughts",
  // "Masala films",
  // "Tarot card reading",
  // "Test",
  // "Recently uploaded",
  // "Watched",
  // "New to you",
    return (
        <>
            <div className="container_page_app">
            <LeftSideBar></LeftSideBar>
                <div className="container2_page_app">
              
                  <div className="navigation_Home">
                    <div className="all_catagory"><p>All</p> </div>
                    {NavList.map((m) => {
                     return (
                      <p key={m} className="btn_nav_home">{m}</p>
                     );
                    })}
                    </div>

                  <ShowVideo vids={vids}></ShowVideo>
                </div>
            </div>
        </>
    )
}