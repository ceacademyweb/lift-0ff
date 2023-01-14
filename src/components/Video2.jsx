import { useState, useEffect, useRef } from 'react';
import { converterMinutes } from '../utils/converterMinutes';
import { getElement } from '../utils/getElements';
import { videoScreenFull } from '../utils/videoScreenFull1';
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
document.documentElement.style.setProperty(
  '--top',
  `${Math.floor(getRandomArbitrary(10, 90))}%`
);
document.documentElement.style.setProperty(
  '--left',
  `${Math.floor(getRandomArbitrary(10, 90))}%`
);
setInterval(() => {
  document.documentElement.style.setProperty(
    '--top',
    `${Math.floor(getRandomArbitrary(10, 90))}%`
  );
  document.documentElement.style.setProperty(
    '--left',
    `${Math.floor(getRandomArbitrary(10, 90))}%`
  );
}, 10000);

const Video2 = ({ src, copy }) => {
  const [total, setTotal] = useState();
  const [totalText, setTotalText] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTimeText, setCurrentTimeText] = useState('00:00');

  const videoEl = useRef();
  const buttonPlayIcon = useRef();
  const buttonMuteIcon = useRef();
  const buttonFullscreenIcon = useRef();
  useEffect(() => {}, []);

  const videoLoad = ({ target }) => {
    setTotal(Math.round(target.duration));
    setTotalText(converterMinutes(Math.round(target.duration)));
  };

  const togglePlay = ({ target }) => {
    const video = videoEl.current;
    if (
      target.nodeName === 'VIDEO' ||
      target.classList.contains('video') ||
      target.classList.contains('video__play') ||
      target.classList.contains('icon-play')
    ) {
      if (video.paused) {
        video.play();
        buttonPlayIcon.current.classList.remove('bi-play-fill');
        buttonPlayIcon.current.classList.add('bi-pause-fill');
        video.parentElement.classList.add('play');
        video.parentElement.classList.remove('pause');
      } else {
        video.pause();
        buttonPlayIcon.current.classList.add('bi-play-fill');
        buttonPlayIcon.current.classList.remove('bi-pause-fill');
        video.parentElement.classList.add('pause');
        video.parentElement.classList.remove('play');
      }
    }
  };

  const play = ({ target }) => {
    setInterval(() => {
      setCurrentTime(target.currentTime);
      setCurrentTimeText(converterMinutes(Math.round(target.currentTime)));
    }, 1000);
  };

  const muted = ({ target }) => {
    const video = videoEl.current;
    if (!video.muted) {
      video.muted = true;
      buttonMuteIcon.current.classList.add('bi-volume-off-fill');
      buttonMuteIcon.current.classList.remove('bi-volume-up-fill');
    } else {
      video.muted = false;
      buttonMuteIcon.current.classList.remove('bi-volume-off-fill');
      buttonMuteIcon.current.classList.add('bi-volume-up-fill');
    }
  };

  const fullScreen = ({ target }) => {
    const video = getElement(target, 'video');

    videoScreenFull(video);
  };
  return (
    <div className="video" onClick={togglePlay}>
      <video
        src={src}
        onLoadedData={videoLoad}
        onPlay={play}
        ref={videoEl}
      ></video>
      <div className="layer-copy">{copy}</div>
      <div className="video__control">
        <div className="video__duration">
          <span id="currentTime">{currentTimeText}</span>/{totalText}
        </div>
        <button className="video__play">
          <i ref={buttonPlayIcon} className="bi bi-play-fill icon-play"></i>
        </button>
        <progress className="video__progress" max={total} value={currentTime} />
        <button className="video__mute" onClick={muted}>
          <i
            ref={buttonMuteIcon}
            className="bi bi-volume-up-fill icon-mute"
          ></i>
        </button>
        <button className="fullScreen">
          <i
            ref={buttonFullscreenIcon}
            onClick={fullScreen}
            className="bi bi-fullscreen"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Video2;
