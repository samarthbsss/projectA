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
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";

const Body=()=>{
    return<>
     <Flex p={4} align="center" justify="center" border='2px solid red' marginTop='10px' >
      <Box w="40%" mr="4">
        <Image
          borderRadius="full"
          boxSize="200px"
          src="https://avatars.githubusercontent.com/u/25184865?v=4"
          alt="Profile Picture"
        />
      </Box>
      <Box w="60%">
        <VStack align="start">
          <Text fontSize="3xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Full Stack Developer
          </Text>
          <Text fontSize="md">
            I'm a full-stack developer with experience in React, Node.js, and
            SQL databases. I love building web applications that solve real
            problems and make people's lives easier.
          </Text>
          <HStack spacing={4} mt={4}>
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
          </HStack>
        </VStack>
      </Box>
    </Flex>
  
    </>
}

export default Body;