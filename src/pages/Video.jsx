import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import api from '../api/api.js';
import Video5 from '../components/Video5';

const getVideos = async () => {
  const res = await api.get('/videos');
  return res.data;
};
const Video = ({ user, videos }) => {
  addClass();
  const { id } = useParams();
  const [videosNew, setVideosNew] = useState(videos);
  const [video, setVideo] = useState(videos.find((v) => v._id === id));
  useEffect(() => {
    // if (!videos) {
    setVideo(videos.find((v) => v._id === id));
    console.log(video.bg);
  }, [id]);
  return (
    <section className="section Video">
      <div className="Video__container">
        <div className="Video__content">
          <Video5 url={video.url} copy={user.email} copyBg={video.bg} />
          <p className="Video__title">
            {video.pos}. {video.name}
          </p>
        </div>
        <div className="Video__list">
          <div class="face-container">
            <h3>Fase 1</h3>
            {videos.map((video) => (
              <NavLink to={`/fase/1/${video._id}`}>
                {video.pos}. {video.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
