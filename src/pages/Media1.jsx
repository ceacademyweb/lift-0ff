// const $user = sessionStorage.getItem('user');
// if (!$user) location.pathname = '/login';
import { useEffect, useState } from 'react';
import api from '../api/api.js';
import { NavLink, useNavigate } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import Video5 from '../components/Video5';

const Media1 = ({ videos, setVideos }) => {
  addClass();
  useEffect(() => {
    console.log(`media: ${videos}`);
    if (!videos) {
      api
        .get('/videos')
        .then((res) => {
          setVideos(res.data);
          // sessionStorage.setItem('videos', res.data);
        })
        .catch((err) => setError(err));
      //   const copyemail = JSON.parse(userObj).email.split('@')[0] || nul;
      //   setCopy(`${copyemail}@`);
    }
    console.log(videos);
  }, []);
  return (
    <section className="section Media">
      <h1 style={{ textAlight: 'center' }}>Face 1</h1>
      <ul className="video-container">
        {videos.map((video) => (
          <li>
            <NavLink to={`/face/1/${video._id}`}>
              <figure>
                <figcaption>
                  {video.pos}. {video.name}
                </figcaption>
                <img src={video.poster} alt={video.name} />
              </figure>
            </NavLink>
          </li>
          /* <Video2 key={video.name} src={video.url} copy={copy} /> */
        ))}
      </ul>
    </section>
  );
};

export default Media1;
