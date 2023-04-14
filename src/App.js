import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import theme from './customTheme';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Carousel />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
