import React, { useState } from "react";
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
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

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
      bg="gray.900"
      color="white"
      position='fixed'
      width='100%'
    top='0%'
     
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
          <Link href="/about" fontWeight="medium">
            About
          </Link>
          <Link href="/contact" fontWeight="medium">
            Contact
          </Link>
   
          <Button>Skills</Button>
          <Button>Resume</Button>
        
        </Stack>
      </Box>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
    
  );
};

export default Navbar;
