import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './nav';
import Body from './body';
import TechStackCarousel from './skills';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Git from './git';
import Projects from './project';

const Home = () => {
   
  return (
    <>
      <Navbar />
      <Body />
      <About/>
      <Git/>
      <Projects/>
      <TechStackCarousel />
      <Contact/>
      <Footer/>

    </>
  );
};

export default Home;
