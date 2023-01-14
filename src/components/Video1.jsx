import { useRef, useEffect, useState } from 'react';
import videoScreenFull from '../utils/videoScreenFull';
import { SelectParent, SelectButton, videoTimer } from '../utils/getElements';

// const SelectParent = (el) => {
//   while (!el.classList.contains('player')) {
//     el = el.parentElement;
//   }
//   return el;
// };
// const SelectButton = (el) => {
//   while (el.nodeName !== 'I') {
//     el = el.firstChild;
//   }
//   return el;
// };

const Video1 = ({ title, url }) => {
  const videoEl = useRef();
  const playerEl = useRef();
  const playBtn = useRef();
  const volBtn = useRef();
  const fullBtn = useRef();
  const progressBar = useRef();
  const [videoDuration, setVideoDuration] = useState();
  const [time, setTime] = useState();
  const [current, setCurrent] = useState('00:00');
  const [total, setTotal] = useState(12);

  const play = (e) => {
    const target = e.target;
    const video = SelectParent(target).previousElementSibling;
    const button = SelectButton(target);
    if (video.paused) {
      video.play();
      button.classList.remove('bi-play-fill');
      button.classList.add('bi-pause-fill');
      // setInterval(() => {
      //   // console.log(video.currentTime);
      //   progressBar.current.setAttribute('value', video.currentTime);
      // }, 1000);
    } else {
      video.pause();
      button.classList.add('bi-play-fill');
      button.classList.remove('bi-pause-fill');
    }
    // console.dir(video.paused);
  };
  useEffect(() => {}, [videoDuration]);
  const videoLoad = (e) => {
    progressBar.current.setAttribute('max', e.target.duration);
    // progressBar.current.setAttribute('max', e.target.currentTime);
  };
  const muted = (e) => {
    const target = e.target;
    const video = SelectParent(target).previousElementSibling;
    const button = SelectButton(target);
    if (!video.muted) {
      video.muted = true;
      button.classList.add('bi-volume-off-fill');
      button.classList.remove('bi-volume-up-fill');
    } else {
      video.muted = false;
      button.classList.remove('bi-volume-off-fill');
      button.classList.add('bi-volume-up-fill');
    }
  };
  const fullScreen = (e) => {
    videoEl.current.requestFullscreen();
    // const videoCurrentTime = videoEl.current.currentTime;
    // const videoDuration = videoEl.current.duration;
    // videoScreenFull(
    //   videoEl.current,
    //   playerEl.current,
    //   videoCurrentTime,
    //   videoDuration
    // );
  };
  const loaded = (e) => {
    setTotal(200);
    console.log('loaded ' + total);
    // const target = e.target;
    // target.nextElementSibling
    //   .querySelector('progress')
    //   .setAttribute('max', Math.round(target.duration));
  };
  const progress = (e) => {
    console.log('play');
    const target = e.target;
    setInterval(() => {
      target.nextElementSibling
        .querySelector('progress')
        .setAttribute('value', Math.round(target.currentTime));
    }, 1000);
  };
  return (
    <div className="video-conainer">
      <video
        controls
        src={url}
        ref={videoEl}
        onLoadedMetadata={loaded}
        onPlay={progress}
      />
      <div className="player" ref={playerEl}>
        <button className="play-pause" ref={playBtn} onClick={play}>
          <i className="bi bi-play-fill"></i>
        </button>
        <progress
          max={total}
          value={current}
          className="progress-bar"
          ref={progressBar}
        />
        <div className="progressEl">
          {current} / {total}
        </div>
        <button className="audio" ref={volBtn} onClick={muted}>
          <i className="bi bi-volume-up-fill"></i>
        </button>
        <button className="fullscreen" ref={fullBtn} onClick={fullScreen}>
          <i className="bi bi-fullscreen"></i>
        </button>
      </div>
    </div>
  );
};

export default Video1;
