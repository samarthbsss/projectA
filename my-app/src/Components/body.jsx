import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
 
  Image,
 
  
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaCode, FaDatabase, FaServer, FaGithub, FaLinkedin, FaEnvelope, FaPhone  } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import styles from '../Css/body.css'

const Body=()=>{
  const typestyle={

  }
    return<>
    <Box>
      <Box  background={'blue'} marginTop='5.4rem'>
      {/* <Text>HEllo there</Text> */}
      </Box>
    <Flex p={4} m='2rem'alignContent="center" justifyContent="center"   display={{base:"block",md:'flex'}}>
      <Box display='flex' alignContent="center" justifyContent="center" p={4}>
        <Image
          borderRadius="full"
          boxSize="20rem"
          src="https://avatars.githubusercontent.com/u/25184865?v=4"
          alt="MyProfile"
          
        />
      </Box>
      <Box p={4} ml={3} m={5} display='flex'alignContent="center" justifyContent='center'>
        <VStack align="start">
          <Text  fontSize="md" fontWeight="bold">
            HEY
            <span className='wave'>
            👋
            </span>,
            I AM
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            Samarth B S.
          </Text>
          <div style={typestyle}>
          <Typewriter

            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I Am Frontend Developer.")
                .pause(2000)
                .deleteAll()
                .typeString("I Am Backend Developer.")
                .pause(2000)
                .deleteAll()
                .typeString("I Am Fullstack Developer.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
          </div>
          <Text fontSize="xl" fontWeight="medium">
            Full Stack Developer
          </Text>
          <Text fontSize="md">
            A Full-Stack Web Developer based in India, working on 
            frontend and backend technologies including JavaScript,
             typescript, React, Redux, MongoDB, Express and NodeJS.
          </Text>
          {/* <HStack spacing={4} mt={4}>
            <Icon as={FaCode} boxSize={6} />
            <Text fontSize="md" fontWeight="medium">
              React
            </Text>
          </HStack>
          <HStack spacing={4} mt={2}>
            <Icon as={FaServer} boxSize={6} />
            <Text fontSize="md" fontWeight="medium">
              Node.js
            </Text>
          </HStack>
          <HStack spacing={4} mt={2}>
            <Icon as={FaDatabase} boxSize={6} />
            <Text fontSize="md" fontWeight="medium">
              SQL Databases
            </Text>
          </HStack> */}
          <HStack spacing={4} gap={2}  p={3}>
      <Link href="https://github.com/samarthbsss"  target="_blank">
        <Icon as={FaGithub} boxSize={6} />
      </Link>
      <Link href="https://www.linkedin.com/in/samarthbsacharya/"  target="_blank">
        <Icon as={FaLinkedin} boxSize={6} />
      </Link>
      <Link href="mailto:samarthbsacharya@example.com"  target="_blank" >
        <Icon as={FaEnvelope} boxSize={6} />
      </Link>
      <Link href="tel:+8792801332"  target="_blank">
        <Icon as={FaPhone} boxSize={6} />
      </Link>
    </HStack>
        </VStack>
      </Box>
    </Flex>

    </Box>
   
  
    </>
}

export default Body;