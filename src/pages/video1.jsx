import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import api from '../api/api.js';

const getVideos = async () => {
  const res = await api.get('/videos');
  console.log(res.data);
  return res.data;
};
const Video1 = ({ videos, setVideosFn }) => {
  const { id } = useParams();
  addClass();
  const [videosNew, setVideosNew] = useState([]);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    // if (!videos) {

    api
      .get('/videos')
      .then((res) => {
        setVideosNew(res.data);
        setVideo(res.data.find((vid) => video._id === id));
        // sessionStorage.setItem('videos', res.data);
      })
      .catch((err) => setError(err));
    // }
    // setVideosFn(videosNew);
  }, [videosNew]);
  // console.log(videosNew);
  return <section className="section Media"></section>;
};

export default Video1;
