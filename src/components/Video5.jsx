import { useEffect, useState } from 'react';
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const name = 'tino.navarro';
document.documentElement.style.setProperty(
  '--top',
  `${Math.floor(getRandomArbitrary(80, 80))}%`
);
document.documentElement.style.setProperty(
  '--left',
  `${Math.floor(getRandomArbitrary(10, 90))}%`
);
setInterval(() => {
  document.documentElement.style.setProperty(
    '--top',
    `${Math.floor(getRandomArbitrary(20, 80))}%`
  );
  document.documentElement.style.setProperty(
    '--left',
    `${Math.floor(getRandomArbitrary(10, 90))}%`
  );
}, 10000);

function Video5({ url, copy }) {
  const videoUrl = useState(url);
  useEffect(() => {
    const player = new Playerjs({
      id: `player`,
      file: `${url}`,
      // autoplay: true,
    });
    const video = document.querySelector('.video-content video');
    addEventListener('fullscreenchange', (event) => {
      if (video.classList.contains('FullScreen')) {
        video.classList.remove('FullScreen');
      } else {
        video.classList.add('FullScreen');
      }
    });

    video.parentElement.classList.add('video-parent');
    const layer = document.createElement('div');
    const waterMark = document.createElement('div');
    layer.className = 'layer-apuse show';
    waterMark.className = 'waterMark pause';
    video.parentElement.insertAdjacentElement('afterBegin', layer);
    video.parentElement.firstChild.insertAdjacentElement('afterEnd', waterMark);
    waterMark.innerText = copy;
    video.addEventListener('pause', function () {
      console.dir(video.parentElement);
      layer.classList.add('show');
      waterMark.classList.add('pause');
    });
    video.addEventListener('play', function () {
      console.dir(video.parentElement);
      layer.classList.remove('show');
      waterMark.classList.add('show');
      waterMark.classList.remove('pause');
    });
  }, [url]);
  const resize = (e) => {
    console.log(e);
  };
  return (
    <div className="video-content">
      <div id="player" onResize={resize}></div>
    </div>
  );
}

export default Video5;
