import React from 'react';

function Main() {
  return (
    <section className="section Main">
      <div className="Main__container col-2">
        <div className="Main__text">
          <h1 data-aos="fade-right">
            Crece tus Habilidades, <span>define tu futuro</span>
          </h1>
          <p data-aos="fade-right" data-aos-delay="100">
            Presentamos CEAcademy, la escuela del futuro. Te enseñamos las
            habilidades adecuadas para estar preparado para el mañana.
          </p>
          <div
            className="Main__buttons"
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <a href="/trading" className="btn">
              Estudios en trading
            </a>
          </div>
        </div>
        <div className="Main__image" data-aos="fade-left">
          <img src={`/img/home1.jpeg`} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Main;
