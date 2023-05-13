import React, { useState , useEffect } from "react";
import {
  Flex,
  Box,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Image,
  Text,
Heading,
  UnorderedList, ListItem
} from "@chakra-ui/react";
import gif from '../Images/gif.gif'
import coding from '../Images/coding.gif'
import work from '../Images/work.gif'





const About=()=>{


    return <>
     <Text fontSize='3xl'   mb={4} align='center'>About me</Text>
    <Box
    display='flex'
    alignContent='center'
    justifyContent='space-around'
    padding='2rem'
    >   
    
        {/* <Image src={gif} /> */}
        <Image src={coding} borderRadius='50%'/>
        <Box alignContent='center'justifyContent='center' >
      {/* <Heading as="h2" size="lg" mb={4}>About Me</Heading> */}
      <UnorderedList>
        <ListItem>Full-stack web developer specializing in the MERN stack</ListItem>
        <ListItem>Proficient in data structures and algorithms with strong problem-solving skills</ListItem>
        <ListItem>Hands-on experience building React apps in both front-end and back-end roles</ListItem>
        <ListItem>Portfolio includes six major projects and 15+ mini projects, showcasing teamwork, leadership, and communication skills</ListItem>
        <ListItem>Quick learner who stays up-to-date with industry trends and technologies</ListItem>
        <ListItem>Looking for an opportunity to apply skills and expertise to new and challenging projects</ListItem>
      </UnorderedList>
    </Box>
    </Box>
    </>
}

export default About