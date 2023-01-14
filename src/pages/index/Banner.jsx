import React from 'react';

const Banner = () => {
  return (
    <div id="Testimony">
      <section className="section Testimony">
        <div className="Testimony__container col-2">
          <div className="Testimony__text" data-aos="flip-left">
            <h2>
              CE Academy me ayudó a aprender las habilidades para conseguir el
              trabajo de mis sueños.
            </h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              quisque integer elementum egestas aliquet tincidunt. Nunc mauris
              enim tortor libero viverra aenean. Portitor semper facilisi
              velit."
            </p>
            <p>Alfonso García</p>
          </div>
          <div
            className="Testimony__img"
            data-aos="flip-right"
            data-aos-delay="100"
          >
            <img src={`/img/testimony.jpg`} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
