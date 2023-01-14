import React from 'react';
import Card from '../../components/Card';

const Courses = () => {
  const color = 'gray';
  return (
    <section className="section Courses" id="Cursos">
      <div className="Courses__container Courses__header col-2">
        <h2>Estudios en trading</h2>
        <a href="/trading" className="btn btn-dark">
          Cursos
        </a>
      </div>
      <div className="Courses__container col-3">
        <Card
          image={`/img/course1-${color}.png`}
          title="Curso uno"
          body="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis."
          price="3000"
          delay="100"
        />
        <Card
          image={`/img/course2-${color}.png`}
          title="Curso dos"
          body="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis."
          price="3000"
          delay="300"
        />
        <Card
          image={`/img/course3-${color}.png`}
          title="Curso tres"
          body="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis."
          price="3000"
          delay="400"
        />
      </div>
    </section>
  );
};

export default Courses;
