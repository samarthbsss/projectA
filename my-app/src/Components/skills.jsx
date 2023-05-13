import React, { useState, useEffect } from "react";
import { Box, Image, HStack } from "@chakra-ui/react";

const TechStackCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentIndex === techStacks.length - 1) {
//         setCurrentIndex(0);
//       } else {
//         setCurrentIndex(currentIndex + 1);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [currentIndex, techStacks.length]);

  return (
    <Box p={4}>
      {/* <HStack spacing={4} justify="center" align="center">
        {techStacks.map((stack, index) => (
          <Image
            key={index}
            src={`/images/${stack}.png`}
            alt={stack}
            boxSize={50}
            opacity={index === currentIndex ? 1 : 0.5}
          />
        ))}
      </HStack> */}
    </Box>
  );
};

export default TechStackCarousel;

