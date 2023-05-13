import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FiGithub, FiEye, FiMoreHorizontal } from 'react-icons/fi';

function Projects() {
  return (
    <Box width='90%' height='90%'>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/project1.jpg" alt="Project 1" />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                Project 1
              </Text>
              <Text mb={4}>Short description of Project 1 goes here.</Text>
              <Flex justifyContent="space-between">
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/project2.jpg" alt="Project 2" />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                Project 2
              </Text>
              <Text mb={4}>Short description of Project 2 goes here.</Text>
              <Flex justifyContent="space-between">
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/project3.jpg" alt="Project 3" />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                Project 3
              </Text>
              <Text mb={4}>Short description of Project 3 goes here.</Text>
              <Flex justifyContent="space-between">
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/project4.jpg" alt="Project 4" />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                Project 4
              </Text>
              <Text mb={4}>Short description of Project 4 goes here.</Text>
              <Flex justifyContent="space-between">
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiGithub />}
                    aria-label="GitHub Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiEye />}
                    aria-label="View Project Link"
                    variant="ghost"
                  />
                </Link>
                <Link href="#" isExternal>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More Link"
                    variant="ghost"
                  />
                </Link>
              </Flex>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Projects;
