import React from 'react';

const Card = ({ image, title, body, delay }) => {
  return (
    <figure className="card" data-aos="flip-left" data-aos-delay={delay}>
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
      <p className="card-body">{body}</p>
    </figure>
  );
};

export default Card;
