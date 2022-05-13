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


import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import IndexPage from "./routes/IndexPage";
import Extensions from "./routes/Extensions";


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

                
                <BrowserRouter>
                  <Routes>
                    <Route path="extensions" element={<Extensions />} />
                    <Route path="/" element={<IndexPage />} />
                  </Routes>
                </BrowserRouter>
                <Outlet />

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
