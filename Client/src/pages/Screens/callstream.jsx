import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CallStream.css";

function Callstream() {

    const [name,setname] = useState("");
  const navigate = useNavigate();

  let handleSubmit = (input) => {
    if (input.trim() === "") {
      alert("Enter Your Name");
    } else {
      navigate(`/room/${input}`);
    }
  }

  return (
    <div>
      <div className="card">
  <div className="header">
    <div className="image">
   <svg height="512px" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><g id="_x33_95-youtube"><g><path d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z" style={{fill:"#FF0000"}}/><polygon points="208.954,324.723 208.954,187.93 329.18,256.328   " style={{fill:"#FFFFFF"}}/></g></g><g id="Layer_1"/></svg>
    </div>
    <div className="content">
       <span className="title">Get Started</span>
       <p className="message">Join the meeting and Copy the personal link and share it to your friends.</p>
    </div>
    <div>
    <label className="label">
  <span className="icon">
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="rgba(0,0,0,.5)"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.25"
        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      ></path>
    </svg>
  </span>
 
  <input
    type="text"
    className="input"
    placeholder="Enter name"
    autoComplete="off"
    value={name} 
    onChange={(e)=>setname(e.target.value)}
  />
</label>
    
    </div>
     <div className="actions">
       <button className="desactivate" onClick={()=>handleSubmit(name)} type="button">Join Meeting</button>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Callstream