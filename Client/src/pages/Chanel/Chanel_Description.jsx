import { useSelector } from 'react-redux';
import UploadIcon from '@mui/icons-material/Upload';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import "./Chanel_Description.css";

function Chanel_Description({setCreatchanel, cid, setvideoUploadPage}) {

    const chanels = useSelector(state=>state?.chanellReducer);
    console.log(chanels);

    const curentChanel = chanels.filter(e=>e._id===cid)[0];
    console.log(curentChanel);

   const CurrentUser = useSelector((state) => state?.currentUserReducer);

  return (
    <>
        <div className="container3_chanel">
            <div className="chanel_logo_chanel">
            <p className="chanel_name">
              <b>{ curentChanel?.name?.charAt(0).toUpperCase() }</b> 
               </p>
            </div>

            <div className="description_chanel">
                <b> {curentChanel?.name} </b>
                <p> {curentChanel?.desc} </p>
            </div>

            {
               CurrentUser?.result._id === curentChanel?._id && (
                  <>
                     <p className="editbtn_chanel" onClick={()=>setCreatchanel(true)}>
                       <ModeEditIcon></ModeEditIcon>
                       <b> Edit Chanel</b>
                     </p>

                     <p className="uploadbtn_chanel" onClick={() => setvideoUploadPage(true)}>
                       <UploadIcon></UploadIcon>
                       <b> Upload Video</b>
                     </p>
                     
                      <p className='points'>Points: {CurrentUser?.result?.points || 0}</p>
                  </>
               )
            }

           

      </div>
    </>
  )
}

export default Chanel_Description