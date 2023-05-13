import { Box, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <Box bg="gray.800" py={4}>
      <Text textAlign="center" color="white" fontSize="sm">
        © 2023 Built by Samarth BS. All rights reserved.
      </Text>
      <AiFillHeart style={{color:'red',marginTop:'5px', paddingTop:'10px'}}/>
    </Box>
  );
}

export default Footer;