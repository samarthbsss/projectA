import React, { useState,useRef } from "react";

import {
  useColorModeValue,
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
  Link
} from "@chakra-ui/react";
// import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const bgColor = useColorModeValue('light.navbg', 'dark.navbg');
  const textColor = useColorModeValue('light.navtxt', 'dark.navtxt');
  const primeColor =useColorModeValue('light.primary','dark.primary');

  const toggleMobileNav = () => {
    setIsMobile(!isMobile);
  };


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color={textColor}
      bg={bgColor}
      position='fixed'
      width='100%'
    top='0%'
    id="nav-menu"
    boxShadow='xl'
    >
      <Box>
        <Link href="/" fontSize="2xl" fontWeight="bold">
          Samarth
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={toggleMobileNav}
          aria-label="Toggle Navigation"
          variant="outline"
        />
      </Box>
      <Box
        display={{ base: isMobile ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        // alignItems="left"
        flexGrow={1}
        // border='1px solid red'
      >
        <Stack
    //  border='1px solid red'
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 8 }}
          align={{ base: "center", md: "center" }}
          pt={{ base: 4, md: 0 }}
        >
          <Link href="#about" fontWeight="medium">
            About
          </Link>
          <Link href="#project" fontWeight="medium">
           Projects
          </Link>
          <Link href="#contact" fontWeight="medium">
            Contact
          </Link>
          <Link href="#skills" fontWeight="medium">
           Skills
          </Link>
          <Link 
          href="#git"
          fontWeight="medium">
           Git
          </Link>
          <Link href="https://www.dropbox.com/s/ihis5hwt9az766w/Samarthbs.pdf?dl=0" fontWeight="medium" target='_blank'>
           Resume
          </Link> 
        </Stack>
      </Box>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
    
  );
};

export default Navbar;
