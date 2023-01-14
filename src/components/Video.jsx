import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './VideoJS';

const Video = ({ url }) => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: url,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
    // console.dir(player);
  };

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
};

export default Video;
