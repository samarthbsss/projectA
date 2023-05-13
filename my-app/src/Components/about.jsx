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
  Link,
} from "@chakra-ui/react";
import gif from '../Images/gif.gif'
import coding from '../Images/coding.gif'
import work from '../Images/work.gif'





const About=()=>{


    return <>
    <Box
    border='1px solid black'
    >   
     <Text fontSize='3xl' align='center'>About me</Text>
        {/* <Image src={gif} /> */}
        <Image src={coding} borderRadius='50%'/>
       
    </Box>
    </>
}

export default About