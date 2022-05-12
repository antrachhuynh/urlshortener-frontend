import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  Flex,
  Container,
  Text


} from '@chakra-ui/react';


import Nav from './Nav';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Shorten from './Shorten'




function App() {


  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container>
        <Box textAlign="center" fontSize="2xl"
          boxShadow={'xl'}
          rounded={'lg'}
        >

          <Grid p={12}   >
            <VStack spacing={1}>

              <Heading
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='4xl'
                fontWeight='extrabold'
              >
                Fast URL Shortener
              </Heading>
              <Text>Input your looooong URL and let we do the rest ✌️</Text>
              <Flex>

                <Shorten />

              </Flex>



            </VStack>
          </Grid>
        </Box>
      </Container>
      <Testimonial />
      <Footer />

    </ChakraProvider>
  );
}

export default App;
