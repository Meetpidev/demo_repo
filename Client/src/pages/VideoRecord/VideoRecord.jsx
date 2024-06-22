import { useState } from 'react';
import VideoRecorder from 'react-video-recorder';
import "./VideoRecord.css";

const VideoRecord = () => {
  const [recordedVideos, setRecordedVideos] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  // Function to handle completion of recording
  const handleRecordingComplete = (videoBlob) => {
    setRecordedVideos([...recordedVideos, videoBlob]);
  };

  // Function to handle video upload
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    const videoBlob = URL.createObjectURL(file);
    setUploadedVideos([...uploadedVideos, { file, url: videoBlob }]);
  };

  // Function to clear a recorded video
  const handleClearRecording = (index) => {
    const newRecordedVideos = [...recordedVideos];
    newRecordedVideos.splice(index, 1);
    setRecordedVideos(newRecordedVideos);
  };

  const handleSaveRecording = (videoBlob) => {
    const url = URL.createObjectURL(videoBlob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'recorded-video.mp4'; // You can set the file name here
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const config = {
    mimeType: 'video/mp4', // Set mimeType for MP4 format
  };


  return (
    <div>
     
      <VideoRecorder onRecordingComplete={handleRecordingComplete} config={config}>
        {({ status, startRecording, stopRecording }) => (
          <div>
            <video ref={(ref) => (ref.muted = true)} className='record-video' autoPlay />
            {status === 'ready' && <button onClick={startRecording}>Start Recording</button>}
            {status === 'recording' && <button onClick={stopRecording}>Stop Recording</button>}
          </div>
        )}
      </VideoRecorder>

      <div className='recored-vids'>

        {recordedVideos.map((videoBlob, index) => (
          <div key={index}>
            <video src={URL.createObjectURL(videoBlob)} controls className='re-vids'/>

            <div className="btns-save">
              <button onClick={() => handleSaveRecording(videoBlob)}>Save</button>
              <button onClick={() => handleClearRecording(index)}>Clear Recording</button>
            </div>

          </div>
        ))}
      </div>

      {/* Upload Video Component */}
      <div className='file-upload'>
        <h2>Upload Video</h2>
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
        {uploadedVideos.map((uploadedVideo, index) => (
          <div key={index} className='file'>
            <video src={uploadedVideo.url} controls />
            <p>File: {uploadedVideo.file.name}</p>
          </div>
        ))}
      </div>

      <h4 style={{textAlign:"center", color:"white", marginTop:"4rem"}}>Layout and Other features will be updated soon. as of now you can record and see your video here you can not upload on this website globally </h4>
      <h4 style={{textAlign:"center", color:"white"}}>This features will be updated soon</h4>
    </div>
    
  );
};

export default VideoRecord;

