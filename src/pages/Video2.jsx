import React from 'react';

const Video2 = ({ url, copy }) => {
  return (
    <div>
      <video src={url} controls></video>
      <div className="layer"> capa</div>
    </div>
  );
};

export default Video2;
