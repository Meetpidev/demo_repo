import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';
import moment from "moment";
import "./VideoShowCase.css";
//  onVideoWatched

function VideoShowCase({vid}) {
 
  return (
   <>
   <div className="show_video">
     <Link to={`/videopage/${vid?._id}`}>
       <video src={`http://localhost:8080/${vid?.filePath}`} ></video>
     </Link>
   

     <div className="video_description">

        <div className="chanel_logo">
            <div className="chanel_logo">
                <p className="uploder">{vid?.Uploader?.charAt(0).toUpperCase()}</p>
            </div>
        </div>
        
        <div className="video_details">
            <p className="video_title">{vid?.videoTitle}</p>
            <pre className="video_upload_time">{vid?.createdAt}</pre>
            <pre className="video_upload_time">{vid?.Views} <div className="dot"> {vid?.Uploader} {moment(vid?.createdAt).fromNow()} </div></pre>
        </div>
     </div>
     </div>
   </>
  )
}
VideoShowCase.propTypes = {
  vid: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      video_src: PropTypes.string,
      chanel: PropTypes.string,
      title: PropTypes.string,
      Uploader: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default VideoShowCase