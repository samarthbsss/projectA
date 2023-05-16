import React, { useState, useRef   } from 'react';
import emailjs from '@emailjs/browser';
import {
  ChakraProvider,
  Icon,
  //  Link,
  Box,
  Text,
  Formik,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Form,
  FormControl,
  Input,
  Image,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Button,
  Textarea,
  useToast,
  useColorMode, useColorModeValue,
} from '@chakra-ui/react';
import mes from '../Images/send.gif'
import send from '../Images/send.svg'
// import {  animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const aboutRef = useRef(null);
  const bgColor = useColorModeValue('light.bg', 'dark.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const primeColor =useColorModeValue('light.primary','dark.primary'); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

    const toast=useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    if(name===''|| email===''||message===''){
        return toast({
           status:'error',

           duration:3000,
           title:'Enter all the Details',
           isClosable: true,
        })
    }

    emailjs
      .send(
        'service_gddn7sa',
        'template_unqriku',
        templateParams,
        '5TpgmwBFIoimtU3j9'
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
        },
        error => {
          console.log('FAILED...', error);
        }
      );
    toast({
        title: 'Message Sent!',
          description: "Thanks for sending me a Message.",
          status: 'success',
          duration: 9000,
          isClosable: true,
    })

    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <>
 
    <Text align='center' fontSize='4xl'
    ref={aboutRef}
    >Send me a Message!</Text>

     <Text align='center' fontSize='2xl'>Got a question or proposal, or just want to say hello? Go ahead.</Text>
  
      <Flex
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      alignContent='center'
      justifyContent='space-around'
      padding='2rem'
      id='contact'
      >
        
   <Box width='45rem' height='45rem'>
    <Image src={isPlaying ? mes : send} alt="Preview" height='100%'weight='100%' 
      // borderRadius="full" // This sets the border radius to make it round
      // overflow="hidden" // This ensures the GIF stays within the rounded border
      boxShadow="md" // This adds a shadow effect (optional)
      maxWidth="100%"
        />
   </Box>
   
      <Box paddingTop='5rem' border='1px solid red'>
     
    <HStack paddingLeft='30%' spacing={4} gap={2}>
      <Link href="https://github.com/samarthbsss"  target="_blank">
        <Icon as={FaGithub} boxSize={6} />
      </Link>
      <Link href="https://www.linkedin.com/in/samarthbsacharya/"  target="_blank">
        <Icon as={FaLinkedin} boxSize={6} />
      </Link>
      <Link href="mailto:samarthbsacharya@example.com"  target="_blank">
        <Icon as={FaEnvelope} boxSize={6} />
      </Link>
      <Link href="tel:+8792801332"  target="_blank">
        <Icon as={FaPhone} boxSize={6} />
      </Link>
    </HStack>
        <form  onSubmit={handleSubmit} >

        
        <FormControl>
        <FormLabel>Name</FormLabel>
          <Input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
         
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
       

          <Textarea placeholder='Drop me a message!'  value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button type='submit'>Submit</Button>
        </FormControl>
        </form>

      </Box>
       
      </Flex>
    </>
  );
};

export default Contact;
