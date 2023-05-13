import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.800" py={4}>
      <Text textAlign="center" color="white" fontSize="sm">
        © 2023 Samarth BS. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;