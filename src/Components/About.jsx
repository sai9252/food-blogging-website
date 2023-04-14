import { Flex, Image, Text, Button, Box } from '@chakra-ui/react';
import React from 'react';
import about_pic from '../Assets/Images/pharmasict-serving-customer-drug-store 1.png';

function About() {
  return (
    <Flex mt={{lg:'180px'}} py={{base:'140px',lg:'0'}} bg={'#F0F1F7'}>
      <Flex justifyContent={'center'} display={{ base: 'none', lg: 'flex' }} w={{ lg: '50%' }}>
        <Image src={about_pic} />
      </Flex>
      <Flex pl={{ lg: '50px' }} justifyContent={'center'} gap={'25px'} direction={'column'} w={{ base: '100%', lg: '40%' }} alignItems={{base:'center',lg:'flex-start'}}>
        <Text fontWeight={'900'} color={'#0E2368'} lineHeight={{base:'35px',lg:'27px'}} fontSize={{base:'26px',lg:'45px'}} textStyle={'subhead'} >About Us</Text>
        <Text textAlign={{base:'center',lg:'left'}} w={{base:'75%',lg:'80%'}} color={'#444957'} lineHeight={{base:'21px',lg:'27px'}} fontSize={{base:'11px',lg:'15px'}} textStyle={'para'}>Lorem Ipsum is simply dummy text of the printing<wbr /> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</Text>
        <Box>
        <Button
            _hover={{ bg: '#FFF', color: '#E23744', border: '1px solid #E23744' }}
            border={'1px solid #FFFFFF'}
            fontSize={{ base: '11px', lg: '16px' }}
            lineHeight={{ base: '40px', lg: '36px' }}
            color={'#FFFFFF'}
            borderRadius={'27px'}
            backgroundColor={'#E23744'}
            px={{ base:'31px',lg:'30px'}}
            py={{ base:'2px',lg:'5px'}}
          >
          Read More
        </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default About;
