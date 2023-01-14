import React from 'react';

const Banner = () => {
  return (
    <section className="BannerImg">
      <img
        src="/img/image-about-us-01.jpg"
        alt="img banner"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-delay="0"
      />
      <img
        src="/img/image-about-us-02.jpg"
        alt="img banner"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-delay="100"
      />
      <img
        src="/img/image-about-us-03.jpg"
        alt="img banner"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      />
      <img
        src="/img/image-about-us-04.jpg"
        alt="img banner"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-delay="300"
      />
    </section>
  );
};

export default Banner;
