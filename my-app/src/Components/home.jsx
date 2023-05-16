import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './nav';
import Body from './body';

import About from './about';
import Contact from './contact';
import Footer from './footer';
import Git from './git';
import Projects from './project';

import TechStacks from './teck';



const Home = () => {
   
  return (
    <>
    <Box w='100%' h='100%'>
    <Body />
      <About/>
      
      {/* <TechStack/> */}
   
      {/* <TechStackCarousel /> */}
      {/* <TechStackSection/> */}
      <Projects/>
      <TechStacks/>
      <Git/>
      <Contact/>
      <Footer/>

    </Box>
     <Navbar />
   
   
    
   
    </>
  );
};

export default Home;
