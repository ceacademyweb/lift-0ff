import { converterMinutes } from './converterMinutes';

export const videoScreenFull = (video) => {
  const videoTag = video.querySelector('video');
  const currentTime = Math.floor(videoTag.currentTime);
  modalCreate(video, videoTag, currentTime);
};

const modalCreate = (video, videoTag, currentTime) => {
  if (document.querySelector('.video-modal'))
    document.querySelector('.video-modal').remove();
  const newVideo = video.cloneNode(true);
  newVideo.classList.add('video-fullscreen');
  const videoModal = document.createElement('div');
  videoModal.className = 'video-modal';
  videoModal.appendChild(newVideo);
  document.body.appendChild(videoModal);
  modalVideoConfig(video, newVideo, videoTag, currentTime);
};

const changeIcons = (video, paused, muted) => {
  const playIcon = video.querySelector('.icon-play');
  const mutedIcon = video.querySelector('.icon-mute');
  if (!paused) {
    playIcon.classList.remove('bi-play-fill');
    playIcon.classList.add('bi-pause-fill');
  } else {
    playIcon.classList.add('bi-play-fill');
    playIcon.classList.remove('bi-pause-fill');
  }
  if (muted) {
    mutedIcon.classList.add('bi-volume-off-fill');
    mutedIcon.classList.remove('bi-volume-up-fill');
  } else {
    mutedIcon.classList.remove('bi-volume-off-fill');
    mutedIcon.classList.add('bi-volume-up-fill');
  }
};
const progressActivation = (videoTag) => {
  const progressBar = videoTag.parentElement.querySelector('progress');
  const currentTimeEl = videoTag.parentElement.querySelector('#currentTime');
  setInterval(() => {
    const currentTime = converterMinutes(Math.round(videoTag.currentTime));
    console.log(currentTime);
    currentTimeEl.innerText = currentTime;
    progressBar.value = Math.round(videoTag.currentTime);
  }, 1000);
};

const modalVideoConfig = (video, newVideo, videoTag, currentTime) => {
  const newVideoTag = newVideo.querySelector('video');
  if (currentTime > 0) {
    newVideo.classList.add('play');
    videoTag.pause();
    video.classList.remove('play');
    newVideoTag.currentTime = currentTime;
    newVideoTag.play();
  }
  progressActivation(newVideoTag);
  if (videoTag.muted) newVideoTag.muted = true;
  changeIcons(newVideo, newVideoTag.paused, videoTag.muted);
  modalActions(video, newVideo, videoTag, newVideoTag);
};

const modalActions = (video, newVideo, videoTag, newVideoTag) => {
  const playBtn = newVideo.querySelector('.video__play');
  const mutedBtn = newVideo.querySelector('.video__mute');
  const fullScreenBtn = newVideo.querySelector('.fullScreen');

  newVideo.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.nodeName === 'VIDEO' ||
      target.classList.contains('video') ||
      target.classList.contains('video__play') ||
      target.classList.contains('icon-play')
    ) {
      if (newVideoTag.paused) {
        newVideoTag.play();
        newVideo.classList.add('play');
        changeIcons(newVideo, false, newVideoTag.muted);
      } else {
        newVideoTag.pause();
        newVideo.classList.remove('play');
        changeIcons(newVideo, true, newVideoTag.muted);
      }
    }
  });
  mutedBtn.addEventListener('click', (e) => {
    console.log(newVideoTag.muted);
    !newVideoTag.muted
      ? (newVideoTag.muted = true)
      : (newVideoTag.muted = false);
    changeIcons(newVideo, null, newVideoTag.muted);
  });
  fullScreenBtn.addEventListener('click', () => {
    const isPaused = newVideoTag.paused;
    const currentTime = newVideoTag.currentTime;
    const muted = newVideoTag.muted;
    videoTag.currentTime = currentTime;
    videoTag.muted = muted;
    if (isPaused) {
      videoTag.pause();
      video.classList.remove('play');
    } else {
      videoTag.play();
      video.classList.add('play');
    }
    changeIcons(video, isPaused, newVideoTag.muted);
    newVideoTag.pause();
    newVideo.parentElement.remove();
  });
};
