import React from 'react';

const Why = () => {
  return (
    <section className="section Why" id="Estudiar">
      <h2 data-aos="zoom-in">¿Por qué estudiar con nosotros?</h2>
      <div className="Why__container col-2">
        <div className="left-side">
          <div className="Why__item" data-aos="fade-right">
            <img src={`/img/why-us1.svg`} alt="" />
            <div>
              <h2>Maestros de clase mundial</h2>
              <p>
                Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                Volutpat quis molestie tortorerm, gravida a aenean neque.
                Placerat
              </p>
            </div>
          </div>
          <div className="Why__item" data-aos="fade-right" data-aos-delay="50">
            <img src={`/img/why-us2.svg`} alt="" />
            <div>
              <h2>Cursos de primera categoría</h2>
              <p>
                Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                Volutpat quis molestie tortorerm, gravida a aenean neque.
                Placerat
              </p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="Why__item" data-aos="fade-left" data-aos-delay="100">
            <img src={`/img/why-us3.svg`} alt="" />
            <div>
              <h2>Comunidad Global de Estudiantes</h2>
              <p>
                Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                Volutpat quis molestie tortorerm, gravida a aenean neque.
                Placerat
              </p>
            </div>
          </div>
          <div className="Why__item" data-aos="fade-left" data-aos-delay="150">
            <img src={`/img/why-us4.svg`} alt="" />
            <div>
              <h2>Tutoría individual</h2>
              <p>
                Lorem ipsum dolor sit amet, consecteturirem adipiscing elit.
                Volutpat quis molestie tortorerm, gravida a aenean neque.
                Placerat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
