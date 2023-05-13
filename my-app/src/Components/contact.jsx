import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ChakraProvider,
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
  Icon,
  Button,
  Textarea,
  useToast,
  useColorMode, useColorModeValue,
} from '@chakra-ui/react';
import mes from '../Images/send.gif'
import send from '../Images/send.svg'

const Contact = () => {
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
      <Flex
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      >
      
   <div style={{width:'50rem',height:'50rem'}}>
   <img src={isPlaying ? mes : send} alt="Preview" style={{height:'100%',weight:'100%'}} />

   </div>
  
      <Box display='flex' alignContent='center' justifyContent='center'>
      
      <Text>Send me a Message!</Text>
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
