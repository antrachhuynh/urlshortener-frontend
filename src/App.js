import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Container,


} from '@chakra-ui/react';


import Nav from './Nav';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Stats from './Stats';


import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import IndexPage from "./routes/IndexPage";
import Extensions from "./routes/Extensions";
import About from './routes/About';
import Contact from './routes/Contact';
import Register from './routes/Register';
import Login from './routes/Login';
import Api from './routes/Api';

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



              <BrowserRouter>
                <Routes>
                  <Route path="extensions" element={<Extensions />} />
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/api" element={<Api />} />
                </Routes>
              </BrowserRouter>
              <Outlet />





            </VStack>
          </Grid>
        </Box>
      </Container>
      <Stats />
      <Testimonial />

      <Footer />

    </ChakraProvider>
  );
}

export default App;
