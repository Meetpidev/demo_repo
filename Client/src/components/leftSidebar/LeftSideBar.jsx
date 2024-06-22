import {NavLink} from "react-router-dom";
import "./LeftSidebar.css";

function LeftSideBar() {
  return (
    <>
        <div className="container_leftsidebar">
            <NavLink to={"/"} className="icon_sidebar_div">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><path fill="#ffffff" d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
            <div className="text-title-icon">Home</div>
            </NavLink>

            <div className="icon_sidebar_div">
            <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"  viewBox="0 0 512 512"><path fill="#ffffff" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
            <div className="text-title-icon">Explore</div>
            </div>

            <div className="icon_sidebar_div">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
            <div className="text-title-icon sub">Subcription</div>
            </div>

            <NavLink to={"/librery"} className="icon_sidebar_div">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>
            <div className="text-title-icon">Librery</div>
            </NavLink>

        </div>
    </>
  )
}

export default LeftSideBar