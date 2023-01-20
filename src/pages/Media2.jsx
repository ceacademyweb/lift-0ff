import React, { useEffect, useState } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import { Link } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import api from '../api/api.js';
import { useNavigate } from 'react-router-dom';

const getVideos = async () => {
  const res = await api.get('/videos');
  // console.log(res.data);
  return res.data;
};
const Media2 = ({ videos, setVideosFn, user, setUserFn }) => {
  addClass();
  const navigate = useNavigate();
  const [videosNew, setVideosNew] = useState(videos || []);
  const [fase1, setFase1] = useState(videosNew.filter((f) => !f.fase) || []);
  const [fase2, setFase2] = useState(videosNew.filter((f) => f.fase) || []);
  useEffect(() => {
    if (!videos) {
      api
        .get('/videos')
        .then((res) => {
          setVideosNew(res.data);
          setVideosFn(res.data);
          setFase1(res.data.filter((f) => !f.fase));
          setFase2(res.data.filter((f) => f.fase));

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

  const show = ({ target }) => {
    let t = target;
    while (!t.classList.contains('buttonEtapas')) {
      t = t.parentElement;
    }
    if (isMobile) {
      t.parentElement.querySelector('ul').classList.toggle('show');
      t.parentElement.querySelector('ul').classList.remove('hidde');
    }
  };
  const show1 = ({ target }) => {
    let t = target;
    while (!t.classList.contains('fases-list')) {
      t = t.parentElement;
    }
    // if (isMobile) {
    console.log(t);
    console.log('entra');
    t.classList.add('hidde');
    // }
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
      <div className="etapas">
        <div className="buttonEtapas" onClick={show}>
          <p className="btn btn-dark button">
            Etapas <i className="fa-solid fa-chevron-down"></i>
          </p>
          <ul className="fases-list">
            {[1, 2].map((el) => (
              <li key={el}>
                <a href={`#fase${el}`} onClick={show1}>
                  Fase {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h1 id="fase1" style={{ textAlight: 'center' }} className="fase">
        Fase 1
      </h1>
      <ul className="video-container" style={{ marginBottom: '10vh' }}>
        {fase1.map((video) => (
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
      <h1 id="fase2" style={{ textAlight: 'center' }} className="fase">
        Fase 2
      </h1>
      <ul className="video-container">
        {fase2.map((video, i) => (
          <li key={video.name}>
            <Link to={`/fase/2/${video._id}`}>
              <figure>
                <img src={'/img/video-fondo.jpg'} alt={video.name} />
                <figcaption>
                  {i + 1}. {video.name}
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
