import React, { useState } from 'react';

const Media5 = ({ videos, setVideos, user }) => {
  const newVideos = useState(videos);
  console.log(videos);
  return (
    <section className="section Media">
      <p>Binevenido {user.name}</p>
      <div className="welcome">Bienvenido {user.name}</div>
      <h1 style={{ textAlight: 'center' }}>Fase 1</h1>
      <ul className="video-container">
        {user.name}
        {/* {videos.map((video) => (
          <li key={video.name}>
            <Link to={`/fase/1/${video._id}`}>
              <figure>
                <img src={'/img/video-fondo.jpg'} alt={video.name} />
                <figcaption>
                  {video.pos}. {video.name}
                </figcaption>
              </figure>
            </Link>
          </li>
        ))} */}
      </ul>
    </section>
  );
};

export default Media5;
