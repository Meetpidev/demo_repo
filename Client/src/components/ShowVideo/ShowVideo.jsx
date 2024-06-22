import VideoShowCase from "../VideoShowCase/VideoShowCase";
import PropTypes from 'prop-types'; 
import "./ShowVideo.css";

function ShowVideo({vids}) {
  
  return (
   <>
      <div className='show_container'>
        {
          vids?.map(vi=>
            {
                return (
                    <div key={vi._id} className="video_box">
                        <VideoShowCase vid={vi} />
                    </div>
                )
            })  
        }
    </div>
   </>
  )
}
ShowVideo.propTypes = {
  vids: PropTypes.arrayOf(
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

export default ShowVideo