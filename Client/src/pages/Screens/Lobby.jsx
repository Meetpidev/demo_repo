// import { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSocket } from "../ScoketProvider/ScoketProvider";


import "./Lobby.css";
import LandingPage from "./LandingPage";

function Lobby() {

  
  // const [email, setEmail] = useState("");
  // const [room, setRoom] = useState("");

  // const socket = useSocket();
  // const navigate = useNavigate();

  // // console.log(socket);

  // let handleSubmitForm = useCallback((e) => {
  //   e.preventDefault();
    
  //   socket.emit('room:join', { email, room } );

  // },[email,room,socket]);

  // let handleSocketsubmit = useCallback((data)=>{
  //      const { email, room} = data;
  //      navigate(`/meeting/${room}`);
  // },[navigate]);

  // useEffect(()=>{
  //   socket.on('room:join' , handleSocketsubmit);

  //   return () => {
  //     socket.off('room:join', handleSocketsubmit);
  //   }
  // },[socket, handleSocketsubmit])
 
  
  return (
   <> 
    
     <div className="input">
       <LandingPage></LandingPage>
     </div>
    </>
  )
}

export default Lobby