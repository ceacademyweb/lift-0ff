import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import api from '../api/api.js';
import Video5 from '../components/Video5';

const getVideos = async () => {
  const res = await api.get('/videos');
  return res.data;
};
const Video = ({ user, videos, setUserFn }) => {
  addClass();
  window.scrollTo(0, -300);
  // window.scrollY = 0;
  // document.scrollTop = 0;
  const { id } = useParams();
  const contenedor = useRef();
  const [videosNew, setVideosNew] = useState(videos);
  const [video, setVideo] = useState(videos.find((v) => v._id === id));
  const [fase1, setFase1] = useState(videos.filter((f) => !f.fase) || []);
  const [fase2, setFase2] = useState(videos.filter((f) => f.fase) || []);
  const [fase3, setFase3] = useState(videos.filter((f) => f.fase) || []);
  const [fase4, setFase4] = useState(videos.filter((f) => f.fase) || []);

  useEffect(() => {
    window.scrollTo(0, -300);
    // window.scrollY = 0;
    // if (!videos) {
    setVideo(videos.find((v) => v._id === id));
    setFase1(videos.filter((f) => !f.fase));
    setFase2(videos.filter((f) => f.fase == 2));
    setFase3(videos.filter((f) => f.fase == 3));
    setFase4(videos.filter((f) => f.fase == 4));
    contenedor.current.classList.remove('opacitynew');
    // console.log(videoHeight);
  }, [id]);
  const sessionClosed = () => {
    setUserFn(null);
    navigate('/');
  };
  return (
    <section className="section Video opacitynew" ref={contenedor}>
      <div className="welcome">
        Bienvenido {user.name}
        <i
          style={{ opacity: '0.8', marginLeft: '.5em', cursor: 'pointer' }}
          title="Cerrar Sesión"
          className="fa-solid fa-right-from-bracket"
          onClick={sessionClosed}
        ></i>
      </div>
      <div className="Video__container">
        <div className="Video__content">
          <Video5
            url={video.url}
            copy={user.email}
            copyBg={video.bg}
            // ref={videoContainer}
          />
          <p className="Video__title">
            {video.pos}. {video.name.toUpperCase()}
          </p>
        </div>
        <div className="Video__list">
          <div class="face-container">
            <h3>Fase 1</h3>
            {fase1.map((video) => (
              <NavLink to={`/fase/1/${video._id}`} key={video.id}>
                {video.pos}. {video.name}
              </NavLink>
            ))}
          </div>
          <div className="face-container">
            <h3>Fase 2</h3>
            {fase2.map((video) => (
              <NavLink to={`/fase/2/${video._id}`} key={video.id}>
                {video.pos}. {video.name}
              </NavLink>
            ))}
          </div>
          <div class="face-container">
            <h3>Fase 3</h3>
            {fase3.map((video) => (
              <NavLink to={`/fase/3/${video._id}`} key={video.id}>
                {video.pos}. {video.name}
              </NavLink>
            ))}
          </div>
          <div class="face-container">
            <h3>Fase 4</h3>
            {fase4.map((video) => (
              <NavLink to={`/fase/3/${video._id}`} key={video.id}>
                {video.pos}. {video.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
