import React from 'react';
import Banner from './nosotros/Banner';
import Carroucel from './nosotros/Carroucel';
import History from './nosotros/History';
import Main from './nosotros/Main';
import addClass from '../utils/addClass';

const AboutUs = () => {
  addClass();
  return (
    <>
      <div>AboutUs</div>
      <Main />
      <Banner />
      <History />
      <div className="Mission">
        <h1>
          La misión detrás
          <br />
          de ECACADEMY
        </h1>
        <Carroucel />
      </div>
    </>
  );
};

export default AboutUs;
