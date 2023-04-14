import { Flex, Image,Box, Button, Text } from '@chakra-ui/react'
import React from 'react';

function Card({img,heading,text}) {
  return (
      <Flex mb={{base:'50px'}} border={' 1.37039px solid rgba(147, 162, 211, 0.38)'} borderRadius={'21px'} justifyContent={'space-around'} alignItems={'center'} direction={'column'} w={{ lg: '380px',base:'280px' }} h={{ lg: '554px',base:'484px' }} >
          <Box>
              <Image height={{base:'166px',lg:'258px'}} width={{base:'204px',lg:'326px'}} borderRadius={{base:'27px',lg:'21px'}} src={img} />
          </Box>
          <Flex w={{lg:'80%',base:'88%'}} direction={'column'}>
              <Text align={{ base:'center',lg:'left'}} fontWeight={'900'} textStyle={'subhead'} fontSize={{lg:'21px',base:'16px'}} lineHeight={{lg:'27px',base:'35px'}} color={'#0E2368'} >{heading}</Text>
              <Text noOfLines={[5,3]} textStyle={'para'} fontSize={{lg:'15px',base:'12px'}} lineHeight={{lg:'27px',base:'22px'}} >{text}</Text>
          </Flex>
          <Flex justifyContent={'flex-start'} w={{lg:'90%'}}>
              <Button bg={'#FFFFFF'} border={'1px solid #424961'} padding={{lg:'3px 26px'}} borderRadius={'21px'} >
                  Read More
              </Button>
          </Flex>
    </Flex>
  )
}

export default Card