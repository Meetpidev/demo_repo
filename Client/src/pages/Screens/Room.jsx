import { useEffect, useRef, useState } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./Lobby.css";

const Room = () => {
  const { id } = useParams();
  const roomID = id;
  const meetingContainerRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

  useEffect(() => {
    const initMeeting = async () => {
      const appID = 1051395991;
      const serverSecret = "9fe4238504b7af14878ca20a9eb8d700";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), `${id}`);

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: meetingContainerRef.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // Change to ZegoUIKitPrebuilt.OneONoneCall for 1-on-1 calls.
        },
      });
    };

    initMeeting();
  }, [roomID, id]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { mediaSource: "screen" }
    });

    const options = { mimeType: 'video/webm; codecs=vp9' };
    mediaRecorderRef.current = new MediaRecorder(stream, options);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      setHasRecording(true);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const downloadRecording = () => {
    const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'recording.webm';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    setHasRecording(false);
    recordedChunks.current = [];
  };

  

  return (
    <>
      <div ref={meetingContainerRef} className="meeting-container"></div>
      <div className="controls">
      {isRecording ? (
        <Button variant="contained" color="secondary" onClick={stopRecording}>Stop Recording</Button>
      ) : (
        <Button variant="contained" color="primary" onClick={startRecording}>Start Recording</Button>
      )}
      {hasRecording && (
        <Button variant="contained" onClick={downloadRecording}>Download Recording</Button>
      )}
      </div>
    </>
  );
};

export default Room;
