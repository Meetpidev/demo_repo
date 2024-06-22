import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateChanelData } from "../../actions/ChanelUser.js";
import { useSelector } from "react-redux";
import { login } from "../../actions/auth.js";
import "./CreateChennel.css";

function CreateChennel({setCreatchanel}) {

  // const CurrentUser = {
  //   result:{
  //     email:"meetkshah3112@gmail.com",
  //     joinedon:"2222-07-15T09:57:23.489Z"
  //   }
  // };
  const CurrentUser = useSelector(state=>state?.currentUserReducer);
  console.log("Current User",CurrentUser)

  const [name,setname] = useState(CurrentUser?.result.name);
  const [desc,setdesc] = useState(CurrentUser?.result.desc);

  let dispatch = useDispatch();

  let handleSubmit = () => {
    if(!name){
      alert("please Enter The Name");
    }
    else if(!desc) {
      alert("please Enter The Description");
    }
    else{
      dispatch(updateChanelData(CurrentUser?.result._id,{
        name:name,
        desc:desc,
      }));

      setCreatchanel(false)
      setTimeout(()=>{
        dispatch(login({email:CurrentUser?.result.email}))
      },5000);
    }

  }

  return (
    <>
        <div className="CreateChennel">
          <input type="text" name="text" value={"x"} className="ibtn_x" onClick={()=>setCreatchanel(false)}/>
            <div className="CreateChennel2">
               <h1>
               { CurrentUser?.result.name ? <>Edite</> : <>Create</> }  Your Chanel
               </h1>

               <input 
               type="text" 
               name="text" 
               className="ibox" 
               value={name} 
               placeholder="Enter Your/Chanel name: "
               onChange={(e)=>setname(e.target.value)}
               />

               <textarea 
               name="description" 
               id="des" rows={15} 
               className={"ibox"} 
               placeholder="Enter chanel description"
               value={desc}
               onChange={(e)=>setdesc(e.target.value)}
               >
               </textarea>

               <input 
               type="submit" 
               value={"submit"} 
               className="ibtn"
               onClick={handleSubmit} 
               />
             
        </div>

        </div>
    </>
  )
}

export default CreateChennel