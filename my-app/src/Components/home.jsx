import React, { useState } from 'react';
import { Box, useColorModeValue,} from '@chakra-ui/react';
import Navbar from './nav';
import Body from './body';
import ScrollToTopButton from './button';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Git from './git';
import Projects from './project';

import TechStacks from './teck';



const Home = () => {
  const bgColor = useColorModeValue('light.bg', 'dark.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor =useColorModeValue('light.primary','dark.primary'); 
  return (
    <>
    <Box 
    // w='100%' 
    // h='100%'
    id="home"
     >
      <Body  />
      <About/>
     
       <Projects/>
       
      <TechStacks/>
      {/* <Git/> */}
      <Contact/>
      <Footer/>

    </Box>
     <Navbar />
     <ScrollToTopButton/>
   
   
    
   
    </>
  );
};

export default Home;
