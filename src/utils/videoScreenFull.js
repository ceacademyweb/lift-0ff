import { converterMinutes } from './converterMinutes';
import { getElement } from './getElements';

const videoModal = (video, newVideo) => {
  if (document.querySelector('.video-modal'))
    document.querySelector('.video-modal').remove();
  const videoModal = document.createElement('div');
  videoModal.className = 'video-modal';
  videoModal.appendChild(newVideo);
  document.body.appendChild(videoModal);
  // play(newVideo, newVideo);
  // play(video, video);
  const videoOld = video.querySelector('video');
  const pause = videoOld.paused;
  videosStates(videoOld, newVideo.querySelector('video'), pause, null);
  modalActions(video, newVideo, videoModal);
};

const videosStates = (videoOld, videoNew, pauseOld, pauseNew) => {
  // console.log(videoOld, videoNew, pauseOld, pauseNew);
  if (!pauseOld) {
    videoNew.play();
    videoOld.pause();
    videoNew.currentTime = videoOld.currentTime;
    videoOld.parentElement.classList.remove('play');
  }
  if (!pauseNew) {
    videoOld.currentTime = videoNew.currentTime;

  }
};

// const play = (e, newVideo) => {
//   const target = e.target ? e.target : e;
//   console.log(target);
//   const video = newVideo.querySelector('video');
//   const icon = newVideo.querySelector('.icon-play');
//   if (
//     target.nodeName === 'VIDEO' ||
//     target.classList.contains('video') ||
//     target.classList.contains('video__play') ||
//     target.classList.contains('icon-play')
//   ) {
//     if (video.paused) {
//       video.play();
//       icon.classList.remove('bi-play-fill');
//       icon.classList.add('bi-pause-fill');
//       video.parentElement.classList.add('play');
//       video.parentElement.classList.remove('pause');
//     } else {
//       video.pause();
//       icon.classList.add('bi-play-fill');
//       icon.classList.remove('bi-pause-fill');
//       video.parentElement.classList.add('pause');
//       video.parentElement.classList.remove('play');
//     }
//   }
// };

// const mute = ({ target }, newVideo) => {
//   const video = newVideo.querySelector('video');
//   const icon = newVideo.querySelector('.icon-mute');
//   if (!video.muted) {
//     video.muted = true;
//     icon.classList.add('bi-volume-off-fill');
//     icon.classList.remove('bi-volume-up-fill');
//   } else {
//     video.muted = false;
//     icon.classList.remove('bi-volume-off-fill');
//     icon.classList.add('bi-volume-up-fill');
//   }
// };

// const screen = ({ target }, video, newVideo, videoModal) => {
//   const videoOld = video.querySelector('video');
//   const videoNew = newVideo.querySelector('video');
//   const currentTimeNew = videoNew.currentTime;
//   videoOld.currentTime = currentTimeNew;
//   play(video, video);
//   // videoNew.pause();
//   // console.log(videoNew.paused);
//   // if (!videoNew.paused) {
//   //   videoOld.pause();
//   // } else {
//   //   console.log('play');
//   //   videoOld.play();
//   // }
//   videoModal.remove();
//   // newVideo.console.log(videoOld, videoNew);
// };

const modalActions = (video, newVideo, videoModal) => {
  newVideo.addEventListener('click', (e) => {
    play(e, newVideo);
  });
  newVideo.querySelector('.video__mute').addEventListener('click', (e) => {
    mute(e, newVideo);
  });
  newVideo.querySelector('.fullScreen').addEventListener('click', (e) => {
    screen(e, video, newVideo, videoModal);
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      screen(e, video, newVideo, videoModal);
    }
  });
};

export const videoScreenFull = (video) => {
  const newVideo = video.cloneNode(true);
  newVideo.classList.add('newVideo');
  videoModal(video, newVideo);
};
