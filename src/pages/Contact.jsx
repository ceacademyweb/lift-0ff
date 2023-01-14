import React from 'react';
import addClass from '../utils/addClass';

const Contact = () => {
  addClass();
  return (
    <section className="section Contact" id="Contacto" data-aos="fade-left">
      <div className="Card Contact__card">
        <h1>Contáctenos</h1>
        <p>
          Si tiene alguna pregunta sobre Academy, complete el siguiente
          formulario.
        </p>
        <img className="img-mail" src="/img/mail.svg" alt="mail" />
        <form action="/php/send" method="post" className="form" id="form">
          <div className="row col-2">
            <div className="input-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Correo:</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="row col-2">
            <div className="input-group">
              <label htmlFor="phone">Télefono:</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Asunto:</label>
              <input type="mail" name="subjet" id="email" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="msg">Mensaje:</label>
            <textarea name="msg" id="msg"></textarea>
          </div>
          <footer className="Contact__footer">
            <div className="notes" id="notes">
              <img
                className="img-loading"
                id="img-loading"
                src="/img/loading.svg"
                alt=""
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Enviar
            </button>
          </footer>
        </form>
      </div>
    </section>
  );
};

export default Contact;
