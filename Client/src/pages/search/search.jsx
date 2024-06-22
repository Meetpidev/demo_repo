import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftSideBar from "../../components/leftSidebar/LeftSideBar";
import ShowVideo from "../../components/ShowVideo/ShowVideo";

function Search() {
    
    const {searchQuery}=useParams();
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase()))
    .reverse();

  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <h2 style={{color:"white"}}>Search Results for {searchQuery}...</h2>
        <ShowVideo vids={vids} />
      </div>
    </div>
  );
}

export default Search;