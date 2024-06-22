
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentUser } from "../../actions/SetCurrentUser";
import { Link } from "react-router-dom";
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import "./Auth.css";

function Auth({User, setAuthBtn, setCreatchanel}) {
 

  const dispatch = useDispatch();
  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out SuccessFully");
  };

  const displayInitialOrPicture = () => {

    if (User?.result?.imageUrl) {
      return <img src={User?.result?.imageUrl} alt="Profile" className="profile-picture" />;
    }
    else{
      const initial = User?.result?.name
      ? User?.result?.name.charAt(0).toUpperCase()
      : User?.result?.email.charAt(0).toUpperCase();
    return <div className="initial">{initial}</div>;
    }
}

  return (
    <>
   <div className="Auth_container" onClick={()=>setAuthBtn(false)}>
      <div className="Auth_container2">

         <p className="User_Details">

            <div className="logo_div">
                <p className="logo">
                  { displayInitialOrPicture() }
                </p>
                <div className="email_Auth">{User?.result.email}</div>
            </div>

            
             
             
            <div className="btns_Auth">
          {
            User?.result.name ? (
              <>
              {
                <Link to={`chanel/${User?.result._id}`} className="btn_Aut">
                  <div className="your-chanel view">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path fill="#ffffff" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                    <p>View your channel</p>
                  </div>
                </Link>
              }
               </>
            ) : (<>
              <input
                type="submit"
                className="btn_Auth logout"
                value="Create Your Chanel" 
                  onClick={()=>setCreatchanel(true)} />
            </>)
          }
          </div>


         </p>
        
          

          <div className="btn">

          <div className="btns">
           <div className="your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg"  height="24" width="24" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M12 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77C6.48 22 2 17.52 2 12S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.97-1.49-3.85-1.49-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22H12z"></path>
            </svg>
            <p className="name-tag">Google Account</p>
            </div>

            <div className="your-chanel">
             <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
             <p className="name-tag">Switch Account</p>
            </div>

            <div className="your-chanel">
            <GoogleLogout
              clientId={
                "605912000605-kv295lc86fm3gpasv9tlvptmpbv6tbrr.apps.googleusercontent.com"
              }
              onLogoutSuccess={onLogOutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_Auth">
                  <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path></svg>
                  <p className="name-tag">Sign Out</p>
                </div>
              )}
            />
             </div>
            </div>
          </div>
         

          <div className="other-btn">

          <div className="section-1"> 

            <div className="first your-chanel">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M10 9.35 15 12l-5 2.65ZM12 3a.73.73 0 00-.31.06L4.3 7.28a.79.79 0 00-.3.52v8.4a.79.79 0 00.3.52l7.39 4.22a.83.83 0 00.62 0l7.39-4.22a.79.79 0 00.3-.52V7.8a.79.79 0 00-.3-.52l-7.39-4.22A.73.73 0 0012 3m0-1a1.6 1.6 0 01.8.19l7.4 4.22A1.77 1.77 0 0121 7.8v8.4a1.77 1.77 0 01-.8 1.39l-7.4 4.22a1.78 1.78 0 01-1.6 0l-7.4-4.22A1.77 1.77 0 013 16.2V7.8a1.77 1.77 0 01.8-1.39l7.4-4.22A1.6 1.6 0 0112 2Zm0 4a.42.42 0 00-.17 0l-4.7 2.8a.59.59 0 00-.13.39v5.61a.65.65 0 00.13.37l4.7 2.8A.42.42 0 0012 18a.34.34 0 00.17 0l4.7-2.81a.56.56 0 00.13-.39V9.19a.62.62 0 00-.13-.37L12.17 6A.34.34 0 0012 6m0-1a1.44 1.44 0 01.69.17L17.39 8A1.46 1.46 0 0118 9.19v5.61a1.46 1.46 0 01-.61 1.2l-4.7 2.81A1.44 1.44 0 0112 19a1.4 1.4 0 01-.68-.17L6.62 16A1.47 1.47 0 016 14.8V9.19A1.47 1.47 0 016.62 8l4.7-2.8A1.4 1.4 0 0112 5Z"></path></svg>
              <p className="name-tag">YouTube Studio</p>
            </div>

            <div className="first your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 7V7h-3V5h-2v2h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h4v2H8v2h3v2h2v-2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-4V9h6z"></path></svg>
              <p className="name-tag">Purchases and memberships</p>
            </div>

          </div>
           
          <div className="section-2">

           <div className="first your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="m12 3.06 7 3.21v4.84c0 1.3-.25 2.6-.75 3.86-.15.37-.33.76-.55 1.17-.15.27-.31.54-.48.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-.56-3.91-1.97-5.23-3.98-.17-.27-.33-.54-.48-.81-.22-.41-.4-.79-.55-1.17-.48-1.26-.73-2.56-.73-3.86V6.27l7-3.21m0-1.1L4 5.63v5.49c0 1.47.3 2.9.81 4.22.17.44.37.86.6 1.28.16.3.34.6.52.88 1.42 2.17 3.52 3.82 5.95 4.44l.12.02.12-.03c2.43-.61 4.53-2.26 5.95-4.43.19-.29.36-.58.52-.88.22-.41.43-.84.6-1.28.51-1.33.81-2.76.81-4.23V5.63l-8-3.67zm1.08 10.15c-.32-.06-.64-.11-.96-.12A2.997 2.997 0 0012 6a2.996 2.996 0 00-.12 5.99c-.32.01-.64.06-.96.12C8.64 12.58 7 14.62 7 17h10c0-2.38-1.64-4.42-3.92-4.89zM10 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1.12 4.09c.37-.08.64-.11.88-.11s.51.03.88.11c1.48.3 2.63 1.46 3 2.91H8.12c.37-1.45 1.52-2.61 3-2.91z"></path></svg>
              <p className="name-tag">Your data in YouTube</p>
            </div>

            <div className="first your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"></path></svg>
              <p className="name-tag">Appearance: Device theme</p>
            </div>

            <div className="first your-chanel lan">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M13.33 6c-1 2.42-2.22 4.65-3.57 6.52l2.98 2.94-.7.71-2.88-2.84c-.53.67-1.06 1.28-1.61 1.83l-3.19 3.19-.71-.71 3.19-3.19c.55-.55 1.08-1.16 1.6-1.83l-.16-.15c-1.11-1.09-1.97-2.44-2.49-3.9l.94-.34c.47 1.32 1.25 2.54 2.25 3.53l.05.05c1.2-1.68 2.29-3.66 3.2-5.81H2V5h6V3h1v2h7v1h-2.67zM22 21h-1l-1.49-4h-5.02L13 21h-1l4-11h2l4 11zm-2.86-5-1.86-5h-.56l-1.86 5h4.28z"></path></svg>
              <p className="name-tag">Lenguage: British English </p>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path fill="#ffffff" d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
            </div>


            <div className="first your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M12 20.95Q8.975 20.075 6.987 17.312Q5 14.55 5 11.1V5.7L12 3.075L19 5.7V11.35Q18.775 11.275 18.5 11.2Q18.225 11.125 18 11.075V6.375L12 4.15L6 6.375V11.1Q6 12.575 6.438 13.938Q6.875 15.3 7.625 16.438Q8.375 17.575 9.413 18.425Q10.45 19.275 11.625 19.725L11.675 19.7Q11.8 20 11.975 20.288Q12.15 20.575 12.375 20.825Q12.275 20.85 12.188 20.888Q12.1 20.925 12 20.95ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.8 20 18.438 19.65Q19.075 19.3 19.5 18.7Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.5 18.7Q14.925 19.3 15.562 19.65Q16.2 20 17 20ZM17 21Q15.325 21 14.163 19.837Q13 18.675 13 17Q13 15.325 14.163 14.162Q15.325 13 17 13Q18.675 13 19.837 14.162Q21 15.325 21 17Q21 18.675 19.837 19.837Q18.675 21 17 21ZM12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Z"></path></svg>
              <p className="name-tag">Restricted Mode:off</p>
            </div>

            <div className="first your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M11.99 1.98C6.46 1.98 1.98 6.47 1.98 12s4.48 10.02 10.01 10.02c5.54 0 10.03-4.49 10.03-10.02S17.53 1.98 11.99 1.98zM8.86 14.5c-.16-.82-.25-1.65-.25-2.5 0-.87.09-1.72.26-2.55h6.27c.17.83.26 1.68.26 2.55 0 .85-.09 1.68-.25 2.5H8.86zm6.03 1c-.54 1.89-1.52 3.64-2.89 5.15-1.37-1.5-2.35-3.25-2.89-5.15h5.78zM9.12 8.45c.54-1.87 1.52-3.61 2.88-5.1 1.36 1.49 2.34 3.22 2.88 5.1H9.12zm7.03 1h4.5c.24.81.37 1.66.37 2.55 0 .87-.13 1.71-.36 2.5h-4.51c.15-.82.24-1.65.24-2.5 0-.87-.09-1.72-.24-2.55zm4.14-1h-4.38c-.53-1.97-1.47-3.81-2.83-5.4 3.25.4 5.96 2.51 7.21 5.4zm-9.37-5.4c-1.35 1.59-2.3 3.43-2.83 5.4H3.71c1.24-2.9 3.96-5.01 7.21-5.4zm-7.57 6.4h4.5c-.15.83-.24 1.68-.24 2.55 0 .85.09 1.68.24 2.5H3.34c-.23-.79-.36-1.63-.36-2.5 0-.89.13-1.74.37-2.55zm.34 6.05h4.39c.52 1.99 1.48 3.85 2.84 5.45-3.27-.39-6-2.53-7.23-5.45zm9.4 5.45c1.36-1.6 2.32-3.46 2.84-5.45h4.39c-1.24 2.92-3.97 5.05-7.23 5.45z"></path></svg>
              <p className="name-tag">Location:india</p>
            </div>

            <div className="first your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M16 16H8v-2h8v2zm0-5h-2v2h2v-2zm3 0h-2v2h2v-2zm-6 0h-2v2h2v-2zm-3 0H8v2h2v-2zm-3 0H5v2h2v-2zm9-3h-2v2h2V8zm3 0h-2v2h2V8zm-6 0h-2v2h2V8zm-3 0H8v2h2V8zM7 8H5v2h2V8zm15-3v14H2V5h20zm-1 1H3v12h18V6z"></path></svg>
              <p className="name-tag">Keyboard shortcuts</p>
            </div>

          </div> 

          <div className="section-3">

            <div className="first your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path></svg>
              <p className="name-tag">Settings</p>
            </div>

          </div>

          <div className="section-4">

            <div className="last your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff" d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
              <p className="name-tag">Help</p>
            </div>

            <div className="last your-chanel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ffffff"  d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path></svg>
              <p className="name-tag">Send feedback</p>
            </div>

          </div>
        </div>
      </div>
   </div>
  </>
  )
}

export default Auth