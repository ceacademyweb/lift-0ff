import React from 'react';

const CardPath = ({ image, title, body, button, delay }) => {
  return (
    <figure className="Path__card" data-aos="zoom-in" data-aos-delay={delay}>
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
      <p className="Path__card--body">{body}</p>
      <footer className="footer-card">
        <button className="btn btn-blue">{button}</button>
      </footer>
    </figure>
  );
};

export default CardPath;
