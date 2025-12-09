import React from "react";
const Video = (props) => {
  return (
    <>
      <div className="video-container">
        <iframe src={props.videoUrl}
          width="100%"
          height="600px"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
         ></iframe>
    </div>
    </>
  );
};
export default Video;
