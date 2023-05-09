import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../Assets/Images/logo.png';
import { Icon } from '@chakra-ui/react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';

function Footer() {
  return (
    <Flex justifyContent={'space-between'} gap={{base:'30px',lg:'0px'}} direction={['column', 'row']} px={{ lg: '70px',base:'40px' }} py={{ base: '50px', lg: '100px' } }  fontFamily={'Source Sans Pro'}>
      <Flex justifyContent={{ lg: 'flex-start',base:'center' }} alignItems={'center'} w={{ lg: '20%' }}>
        <Image width={{base:'75px', lg: '161px' }} height={{base:'58px', lg: '125px' }} src={logo} />
      </Flex>
      <Flex pl={{ lg:'2%'}} fontSize={{base:'9.5px',lg:'14.655px'}} w={{ lg: '20%' }} direction={'column'} gap={'1px'}>
        <Text
          textStyle={'head'}
          color={'#0E2368'}
          lineHeight={{ base: '35px', lg: '27px' }}
          fontSize={{ base: '16px', lg: '21.8433px' }}
          letterSpacing={'0.08rem'}
          fontWeight={'700'}
        >
          Contact Us
        </Text>
        <Text
          color={'#646874'}
          fontWeight={'500'}
          mb={{base:'2'}}
          >
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434{' '}
        </Text>
        <Text
          color={'#646874'}
          fontWeight={'500'}
          mb={{base:'2'}}
          
        >
          example2020@gmail.com
        </Text>
        <Text
          color={'#646874'}
          fontWeight={'500'}
          
        >
          (904) 443-0343
        </Text>
      </Flex>
      <Flex
        pl={{ lg: '12%' }}
        direction={'column'}
        justifyContent={{base:'center',lg:'space-between'}}
        w={{ lg: '20%' }}
        fontSize={{ base: '9.5px', lg: '14.7' }}
        lineHeight={{base:'30px',lg:'27px'}}
      >
        <Text
          textStyle={'head'}
          color={'#0E2368'}
          lineHeight={{ base: '35px', lg: '27px' }}
          fontSize={{ base: '15.8px', lg: '21.8433px' }}
          letterSpacing={'0.08rem'}
          mb={0}
        >
          More
        </Text>
        <Text
          color={'#646874'}
          fontWeight={'500'}
          mb={{base:'0px'}}
        >
          About Us
        </Text>
        <Text
          color={'#646874'}
          fontWeight={'500'}
          mb={{base:'0'}}
          
        >
          Products
        </Text>
        <Text
          color={'#646874'}
          fontWeight={'500'}
          mb={{base:'0'}}
          
        >
          Career
        </Text>
        <Text
          color={'#646874'}
          fontWeight={'500'}
          mb={{base:'0'}}
          
        >
          Contact Us
        </Text>
      </Flex>
      <Flex
        w={{ lg: '20%' }}
        direction={{ lg: 'column', base: 'column-reverse' }}
        justifyContent={'space-between'}
        alignItems={{ lg: 'flex-end',base:'center' }}
      >
        <Box>
          <Text
            textStyle={'head'}
            color={'#0E2368'}
            lineHeight={{ base: '18px', lg: '27px' }}
            fontSize={{ base: '11px', lg: '21.8433px' }}
            letterSpacing={'0.08rem'}
            display={{base:'none',lg:'block'}}
          >
            Social Links
          </Text>
          <Flex mt={{ lg: '.8em' }} color={'#0E2368'} gap={{ lg: '2em',base:'1em' }}>
           <a class="w3-btn w3-margin-bottom" href="https://www.instagram.com/jayanth_mkv/" target="_blank"><Icon w={{lg:'30px' , base:'16px'}} h={{lg:'30px' ,base:'16px'}} as={AiOutlineInstagram} /></a>
           <a href="https://twitter.com/jayanthmkv/" target="_blank"><Icon w={{lg:'30px' , base:'16px'}} h={{lg:'30px' ,base:'16px'}} as={AiOutlineTwitter} /></a>
           <a href="https://www.facebook.com/jayanthmkv/" target="_blank"><Icon w={{lg:'30px' , base:'16px'}} h={{lg:'25px' ,base:'16px'}} as={ImFacebook} /></a>
          </Flex>
        </Box>
        <Box color={'#828B9C'} lineHeight={{ base: '32px', lg: '27px' }}
            fontSize={{ base: '9.5px', lg: '21.8433px' }} >© 2022 Food Truck Examples</Box>
      </Flex>
    </Flex>
  );
}

export default Footer;
