import React, { useEffect, useState, useRef } from 'react';
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
import { NavLink } from 'react-router-dom';

const getVideos = async () => {
  const res = await api.get('/videos');
  // console.log(res.data);
  return res.data;
};
const Media2 = ({ videos, setVideosFn, user, setUserFn }) => {
  addClass();
  const menuFases = useRef();
  const section = useRef();
  const btn = useRef();
  const contenedor = useRef();
  const navigate = useNavigate();
  const [videosNew, setVideosNew] = useState(videos || []);
  const [fase1, setFase1] = useState([]);
  const [fase2, setFase2] = useState([]);
  const [fase3, setFase3] = useState([]);
  const [fase4, setFase4] = useState([]);
  useEffect(() => {
    // if (!videos) {
    api
      .get('/videos')
      .then((res) => {
        setVideosNew(res.data);
        setVideosFn(res.data);
        setFase1(res.data.filter((f) => !f.fase));
        setFase2(res.data.filter((f) => f.fase == 2));
        setFase3(res.data.filter((f) => f.fase == 3));
        setFase4(res.data.filter((f) => f.fase == 4));
        console.log(res.data);
        // setFase2(res.data.filter((f) => f.fase == 3));
        contenedor.current.classList.remove('opacity');
        // sessionStorage.setItem('videos', res.data);
      })
      .catch((err) => setError(err));
    // } else {
    //   contenedor.current.classList.remove('opacity');
    // }
    // setVideosFn(videosNew);
  }, [videosNew]);
  // console.log(videosNew);
  const sessionClosed = () => {
    setUserFn(null);
    navigate('/');
  };

  const show = (e) => {
    e.preventDefault();
    menuFases.current.classList.toggle('is-active');
    if (e.target.hash) {
      const offsetTop = document.querySelector(e.target.hash).offsetTop;
      window.scroll({
        top: offsetTop - 160,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const show1 = (e) => {
    e.preventDefault();
    if (e.target.hash) {
      const offsetTop = document.querySelector(e.target.hash).offsetTop;
      window.scroll({
        top: offsetTop - 160,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section className="section Media opacity" ref={contenedor}>
      <div className="welcome">
        Bienvenido {user.name}
        <i
          style={{ opacity: '0.8', marginLeft: '.5em', cursor: 'pointer' }}
          title="Cerrar Sesión"
          className="fa-solid fa-right-from-bracket"
          onClick={sessionClosed}
        ></i>
      </div>
      <MobileView>
        <div className="etapas-movile">
          <div className="buttonEtapas-movile">
            <p className="btn btn-dark button-movile" onClick={show}>
              Etapas <i className="fa-solid fa-chevron-down"></i>
            </p>
            <ul className="fases-list-movile" ref={menuFases}>
              {[1, 2, 3, 4].map((el) => (
                <li key={el}>
                  <a href={`#fase${el}`} onClick={show}>
                    Fase {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div className="etapas">
          <div className="buttonEtapas">
            <p className="btn btn-dark button">
              Etapas <i className="fa-solid fa-chevron-down"></i>
            </p>
            <ul className="fases-list">
              {[1, 2, 3, 4].map((el) => (
                <li key={el}>
                  <a href={`#fase${el}`} onClick={show1}>
                    Fase {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BrowserView>
      <article className="fase-container" id="fase1">
        <h1 style={{ textAlight: 'center' }} className="fase">
          Fase 1
        </h1>
        <ul className="video-container" style={{ marginBottom: '10vh' }}>
          {fase1.map((video) => (
            <li key={video.name}>
              <NavLink to={`/fase/1/${video._id}`}>
                <figure>
                  <img src={'/img/video-fondo.jpg'} alt={video.name} />
                  <figcaption>
                    {video.pos}. {video.name}
                  </figcaption>
                </figure>
              </NavLink>
            </li>
          ))}
        </ul>
      </article>
      <article className="fase-container" id="fase2">
        <h1 style={{ textAlight: 'center' }} className="fase">
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
      </article>
      <article className="fase-container" id="fase3">
        <h1 style={{ textAlight: 'center' }} className="fase">
          Fase 3
        </h1>
        <ul className="video-container">
          {fase3.map((video, i) => (
            <li key={video.name}>
              <Link to={`/fase/3/${video._id}`}>
                <figure>
                  <img src={'/img/video-fondo.jpg'} alt={video.name} />
                  <figcaption>
                    {i + 1}. {video.name.toUpperCase()}
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <article className="fase-container" id="fase4">
        <h1 style={{ textAlight: 'center' }} className="fase">
          Fase 4
        </h1>
        <ul className="video-container">
          {fase4.map((video, i) => (
            <li key={video.name}>
              <Link to={`/fase/4/${video._id}`}>
                <figure>
                  <img src={'/img/video-fondo.jpg'} alt={video.name} />
                  <figcaption>
                    {i + 1}. {video.name.toUpperCase()}
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <p>...</p>
    </section>
  );
};

export default Media2;
