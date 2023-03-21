import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import { useNavigate } from 'react-router-dom';
import api from '../api/api.js';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Journal = ({ user, setUserFn }) => {
  // addClass();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(
    JSON.parse(sessionStorage.getItem('user')) || null
  );
  const [value, setValue] = useState(newUser.journalLevel);
  const [valuePlus, setValuePlus] = useState();
  const [images, setImages] = useState([]);
  const contenedor = useRef();
  const journalContainer = useRef(null);
  useEffect(() => {
    console.log(newUser._id + ' new user');
    console.log(contenedor);
    console.log(journalContainer);
    const plus =
      parseInt(newUser.journalLevel) >= 0
        ? parseInt(newUser.journalLevel) + 1
        : 1;
    setValuePlus(plus);
    // axios.get(`https://ceacademy-auth-production.up.railway.app/journal/${newUser.id}`)
    axios.get(`http://localhost:5000/journal/${newUser._id}`).then((res) => {
      console.log(res.data);
      setImages(res.data);
    });
  }, []);
  const sessionClosed = () => {
    setUserFn(null);
    sessionStorage.removeItem('user');
    location.reload();
    // navigate('/');
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

  const rangeSlider = function ({ target }) {
    setValue(target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const Target = e.target;
    const button = Target.querySelector('button');
    console.log('enviando');
    const fd = new FormData(e.target);
    button.innerHTML = '<img src="/img/load.svg" alt="">';
    axios
      .post('https://ceacademy-auth-production.up.railway.app/journal', fd)
      // axios.post('http://localhost:5000/journal', fd)
      .then((res) => {
        const result = res.data.result;
        console.log(result);
        const newElement = document.createElement('div');
        newElement.classList.add('journal-container__item');
        newElement.dataset.id = result.userId;
        newElement.innerHTML =
          result.ext !== 'pdf'
            ? `
        <img src="${result.imagePath}" alt="${result._id}">
        `
            : `<embed type="application/pdf" src="${result.imagePath}" style="width:100%; height:auto"></result>`;
        journalContainer.current.appendChild(newElement);
        Notify.init({
          position: 'center-top',
          timeout: 3000,
          backOverlay: true,
          failure: {
            background: 'darkgreen',
            textColor: '#fff',
            childClassName: 'notiflix-notify-success',
            notiflixIconColor: 'rgba(255,255,255,.9)',
            fontAwesomeClassName: 'fas fa-times-circle',
            fontAwesomeIconColor: 'rgba(255,255,255,.9)',
            backOverlayColor: 'rgba(0,0,0,.5)',
          },
        });
        button.innerHTML = 'Enviar';
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const imageModal = (e) => {
    const target = e.target.parentElement;
    const id = target.dataset.id;
    // navigate(`/journal/${id}`)
  };

  const inputChange = ({ target }) => {
    setValuePlus(target.value);
  };

  return (
    <section className="section Journal" ref={contenedor}>
      <h1>Journal </h1>
      <div className="range-slider">
        <span className="range-lavel range-slider__value">Nivel: </span>
        <input
          className="range-slider__range"
          type="range"
          value={value}
          min="0"
          max="5"
          step="1"
        />
        <span className="range-slider__value">{value}</span>
      </div>
      <article className={'form-container'}>
        <form className="form-upload" onSubmit={submit} encType="">
          <div className="form-upload__row">
            <div className="form-upload__group">
              <label htmlFor="userId" className="form-upload__label">
                ID:
              </label>
              <input
                type="text"
                className="form-upload__input"
                id="userId"
                name="userId"
                value={newUser._id}
                onChange={inputChange}
                readOnly
              />
            </div>

            <div className="form-upload__group">
              <label htmlFor="name" className="form-upload__label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-upload__input"
                id="name"
                name="name"
                value={`${newUser.name}`}
                onChange={inputChange}
                readOnly
              />
            </div>
          </div>
          <div className="form-upload__row">
            <div className="form-upload__group">
              <label htmlFor="journalFase" className="form-upload__label">
                Journal de Fase:
              </label>
              <input
                type="text"
                className="form-upload__input"
                value={valuePlus}
                id="journalFase"
                onChange={inputChange}
                name="journalFase"
              />
            </div>
            <div className="form-upload__group">
              <label htmlFor="file" className="form-upload__label">
                Archivo:
              </label>
              <input
                type="file"
                className="form-upload__input"
                id="file"
                name="file"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-dark">
            Enviar
          </button>
          {/*<p*/}
          {/*  id="target"*/}
          {/*  onDrop="drop_handler(event)"*/}
          {/*  onDragOver="dragover_handler(event)">*/}
          {/*  Drop Zone*/}
          {/*</p>*/}
        </form>
      </article>
      <article
        className="journal-container"
        ref={journalContainer}
        onClick={imageModal}
      >
        {images
          ? images.map((image, index) => (
              <div
                className="journal-container__item"
                key={index}
                data-id={image._id}
              >
                {image.ext === 'pdf' ? (
                  <embed
                    type="application/pdf"
                    src={image.imagePath}
                    style={{ width: '100%', height: 'auto' }}
                  ></embed>
                ) : (
                  <img src={image.imagePath} alt="" data-id={image._id} />
                )}
              </div>
            ))
          : null}
      </article>
    </section>
  );
};

export default Journal;
