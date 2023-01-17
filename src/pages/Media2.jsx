import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import api from '../api/api.js';

const getVideos = async () => {
  const res = await api.get('/videos');
  console.log(res.data);
  return res.data;
};
const Media2 = ({ videos, setVideosFn, user }) => {
  addClass();
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
  return (
    <section className="section Media">
      <div className="welcome">Bienvenido {user.name}</div>
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
