import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import api from '../api/api.js';
import { useNavigate } from 'react-router-dom';

const getVideos = async () => {
  const res = await api.get('/videos');
  console.log(res.data);
  return res.data;
};
const Media2 = ({ videos, setVideosFn, user, setUserFn }) => {
  addClass();
  const navigate = useNavigate();
  const [videosNew, setVideosNew] = useState(videos || []);
  useEffect(() => {
    if (!videos) {
      api
        .get('/videos')
        .then((res) => {
          setVideosNew(res.data);
          setVideosFn(res.data);
          // sessionStorage.setItem('videos', res.data);
        })
        .catch((err) => setError(err));
    }
    // setVideosFn(videosNew);
  }, [videosNew]);
  // console.log(videosNew);
  const sessionClosed = () => {
    setUserFn(null);
    navigate('/');
  };
  return (
    <section className="section Media">
      <div className="welcome">
        Bienvenido {user.name}
        <i
          style={{ opacity: '0.8', marginLeft: '.5em', cursor: 'pointer' }}
          title="Cerrar Sesión"
          className="fa-solid fa-right-from-bracket"
          onClick={sessionClosed}
        ></i>
      </div>
      <h1 style={{ textAlight: 'center' }}>Fase 1</h1>
      <ul className="video-container">
        {videosNew.map((video) => (
          <li key={video.name}>
            <Link to={`/fase/1/${video._id}`}>
              <figure>
                <img src={'/img/video-fondo.jpg'} alt={video.name} />
                <figcaption>
                  {video.pos}. {video.name}
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Media2;
