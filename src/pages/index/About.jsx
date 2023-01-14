import React from 'react';

const About = () => {
  return (
    <section className="section About" id="Nosotros">
      <div className="About__container col-2">
        <div className="About__image" data-aos="fade-right">
          <img src={`/img/about.jpg`} alt="" />
        </div>
        <div className="About__text">
          <h2 data-aos="fade-left">Acerca de CE Academy</h2>
          <p data-aos="fade-left" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            feugiat congue viverra facilisis. Mauris, volutpat mi libero tellus
            donec amet netus
          </p>
          <p data-aos="fade-left" data-aos-delay="150">
            Sapien magna purus, maecenas arcu, enim pretium. Tempor sit amet
            nunc sit amet in ac.
          </p>
          <div
            className="About__buttons"
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <a href="/nosotros" className="btn btn-dark">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
