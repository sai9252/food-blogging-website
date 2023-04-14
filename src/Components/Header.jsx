import React from 'react'
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Image,
  Button,
} from '@chakra-ui/react';

import pie from '../Assets/Images/pizza.png'
import logo from '../Assets/Images/logo.png'
import design from '../Assets/Images/red-design-right.png'

function Header() {
  return (
    
    <Flex direction={['column-reverse','row']}>
      <Flex pl={{base:"0px",lg:'100px'}} w={{base:"100%",lg:'49%'}} direction={"column"}>
        <Box h={'28%'} pt={'2rem'} display={{base:'none',md:'flex'}}>
          <Image width={'107px'} height={'83px'} src={logo} />
        </Box>
        <Flex h={'70%'} pb={'100px'} pt={{base:'70px',lg:'0'}} direction={"column"} justifyContent={'space-around'} gap={"20px"} alignItems={{base:'center',lg:'flex-start'}}>
          <Box lineHeight={{base:'46px',lg:'69px'}} color={'#0E2368'} fontSize={{base:'38px',lg:'62px'}} textStyle={'head'}>
          <Text>Discover the </Text>
          <Text><Text color={'#E23744'} display={'inline'}>Best </Text>Food </Text>
          <Text>and Drinks</Text>
          </Box>
          <Box textStyle={'para'} lineHeight={{base:'18px',lg:'27px'}} fontSize={{base:'11px',lg:'16.4447px'}}>
            <Text>Naturally made Healthcare Products for the</Text>
            <Text>better care & support of your body.</Text>
          </Box>
          <Box>
            <Button _hover={{ bg: '#FFF', color: '#E23744', border: '1px solid #E23744' }} border={'1px solid #FFFFFF'} fontSize={{ base: '12.2664px', lg: '18px' }} lineHeight={{ base: '32', lg: '30px' }} color={'#FFFFFF'} borderRadius={"34px"} backgroundColor={"#E23744"} padding={{base:[5,15], lg: [3, 8] }} px={{ base: '32px' }} py={'25px'}>
              Explore Now!
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Flex position={'relative'} justifyContent={'flex-end'} w={{ base: '100%', lg: '51%' }}>
        <Button textStyle={'head'} letterSpacing={'0.03em'} position={'absolute'} top={{ base: '18px', lg: '32px' }} right={{base:'18px', lg:'41px'}} zIndex={3} fontSize={{base:'11px',lg:'16px'}}  backgroundColor={"#E23744"}  lineHeight={{base:'46px',lg:'36px'}} color={'#FFFFFF'} borderRadius={{base:'27px',lg:"27px"}} _hover={{ bg: '#FFF',color:'#E23744' }} border={'1px solid #FFFFFF'} padding={{base:[1,8], lg:[1,6]}}>
              Get in Touch
        </Button>
        <Image src={pie} />
        <Image height={{ lg: '839px' }} width={{ lg: '752px' }} position={'absolute'} top={'0'} right={'0'} src={design} />
      </Flex>
    </Flex>
    
  )
}

export default Header