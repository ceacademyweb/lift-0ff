import React from 'react';
import CardPath from '../../components/CardPath';

const Path = () => {
  return (
    <section className="section Path" id="Camino">
      <div className="Path__container">
        <h2 data-aos="fade-down">Elige tu camino</h2>
        <p className="Path__copy" data-aos="fade-up">
          Elige cómo te gustaría aprender en Academy. Puede estudiar a tiempo
          completo o parcial en nuestros programas precensiales, o de forma
          remota con nuestros cursos en línea.
        </p>
      </div>
      <div className="Path__container col-3">
        <CardPath
          image={`/img/path1.svg`}
          title="Jornada completa"
          body="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis lorem ipsum."
          button="Aprende Más"
          delay="100"
        />
        <CardPath
          image={`/img/path2.svg`}
          title="Tiempo parcial"
          body="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis lorem ipsum."
          button="Aprende Más"
          delay="200"
        />
        <CardPath
          image={`/img/path3.svg`}
          title="En linea"
          body="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis lorem ipsum."
          button="Ver Cursos"
          delay="300"
        />
      </div>
    </section>
  );
};

export default Path;
