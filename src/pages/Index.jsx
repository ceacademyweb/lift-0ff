import React from 'react';
import About from './index/About';
import Banner from './index/Banner';
import Courses from './index/Courses';
import Main from './index/Main';
import Path from './index/Path';
import Why from './index/Why';
import addClass from '../utils/addClass';

const Index = () => {
  addClass();
  return (
    <>
      <Main />
      <About />
      <Courses />
      <Path />
      <Banner />
      <Why />
    </>
  );
};

export default Index;
