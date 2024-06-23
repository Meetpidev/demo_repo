import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./UploadVideo.css";
import { uploadVideo } from "../../actions/Video";

function UploadVideo({ setvideoUploadPage }) {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();

  const handleFile = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleUploadVideo = () => {
    if (!title) {
      alert("Enter Title");
    } else if (!videoFile) {
      alert("Upload Video");
    } else if (videoFile.size > 100000000000) {
      alert("Please Upload Video Less Than 1TB in Size");
    } else {
      const fileData = new FormData();
      fileData.append("file", videoFile);
      fileData.append("title", title);
      fileData.append("chanel", CurrentUser?.result._id);
      fileData.append("Uploader", CurrentUser?.result.name);

      dispatch(
        uploadVideo(fileData, (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentage = Math.floor((loaded / total) * 100);
          setProgress(percentage);
          if (percentage === 100) {
            setTimeout(() => {
              setvideoUploadPage(false);
            }, 1000);
          }
        })
      );
    }
  };

  return (
    <div className="container_VidUpload">
      <input
        type="submit"
        value={"X"}
        className="ibtn_x"
        onClick={() => setvideoUploadPage(false)}
      />
      <div className="container_VidUpload2">
        <div className="ibox_div_vidupload">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="ibox_vidupload"
            maxLength={100}
            placeholder="Enter Title of your video"
          />
          <label htmlFor="file" className="ibox_vidupload btn_vidUpload">
            <input
              type="file"
              name="file"
              className="ibox_vidupload"
              style={{ fontSize: "1rem" }}
              onChange={handleFile}
            />
          </label>
        </div>
        <div className="ibox_div_vidupload">
          <input
            type="submit"
            value="Upload"
            className="ibox_vidupload btn_vidUpload"
            onClick={handleUploadVideo}
          />
        </div>
        <div className="loader ibox_div_vidupload">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 255, 255, ${progress / 100})`,
              textColor: "#f88",
              trailColor: "#adff2f",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
