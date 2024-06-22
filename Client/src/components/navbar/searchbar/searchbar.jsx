import { useState } from "react";
import SearchList from "./searchList";
import "./searchbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function Searchbar() {

  const [searchQuary,setsearchQuary] = useState("");
  const [searchList,setsearchList] = useState(false);

  const searchTitles = useSelector(s => s?.videoReducer)?.data?.filter(q => q?.videoTitle.includes(searchQuary?.toUpperCase())).map(m=>m?.videoTitle);

  console.log('SearchTite:',searchTitles);
 
  // const searchTitles = [
  //   "tmkoc old episod",
  //   "jijai Chhat par hai",
  //   "adalat","you and I",
  //   "ride it"
  // ].filter(q=>{q.includes(searchQuary)});
  
  return (
   <>
    <div className="searchbar_container">
       <div className="searchbar_container2">
          <div className="search_div">
            <input 
              type="text" 
              className="search_box"
              name="searchQuary" 
              placeholder="Search"
              value={searchQuary}
              onChange={(e)=>{setsearchQuary(e.target.value)}}
              onClick={()=>{setsearchList(true)}}  
              />

               {console.log(searchQuary)} 
               {/* {console.log("SetQuary:",setsearchQuary)} */}
               
            <Link to={`/search/${searchQuary}`}> 
            <svg onClick={e=>{setsearchList(false)}} className="search_icon svgs" xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </Link> 

            <svg className="mick_icon svgs" xmlns="http://www.w3.org/2000/svg" height="12" width="12"  viewBox="0 0 384 512"><path fill="#ffffff" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
            {
              searchQuary && searchList && <SearchList TitleArray={searchTitles} setsearchQuary={setsearchQuary}></SearchList>
            
            }
          </div>
       </div>
    </div>
   </>
  )
}

export default Searchbar