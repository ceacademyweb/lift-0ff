import React from 'react';

const Main = () => {
  return (
    <section className="section Nosotros__main">
      <h1 data-aos="fade-down">
        La misión detrás de <span>CEACADEMY</span>
      </h1>
      <p data-aos="zoom-in">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        tristique laoreet ut elementum cras cursus.
      </p>
      <a
        href="#historia"
        className="btn btn-blue"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        Nuestra Historia
      </a>
    </section>
  );
};

export default Main;
