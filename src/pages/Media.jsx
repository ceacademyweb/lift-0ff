import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import { useFetchVideos } from '../hooks/useUser.js';
import api from '../api/api.js';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Video2 from '../components/Video1.jsx';
const Media = () => {
  const navigate = useNavigate();
  const videoContainer = useRef();
  addClass();
  // setVideos(data);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // document.body.addEventListener('contextmenu', (e) => {
    //   e.preventDefault();
    // });
    const isLogged = sessionStorage.getItem('token');
    if (!isLogged) {
      navigate('/login');
    }
    api
      .get('/videos')
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => setError(err));
    // const videosRep = new EventTarget();
    // console.log(videosRep);
  }, []);

  const pause = (e) => {
    console.log(e.target.parentElement);
  };
  const play = (e) => {
    console.log(e.target);
    e.target.parentElement.classList.remove('pause');
    e.target.style.opacity = '1';
  };
  return (
    <section className="section Media">
      <div className="Media-container" ref={videoContainer}>
        {!error ? (
          videos.map((video) => <Video2 key={video.name} url={video.url} />)
        ) : (
          <p class="warning">
            Ha ocurrido un error Por favor vuelva a intentarlo
          </p>
        )}
      </div>
    </section>
  );
};

export default Media;
