import React, { useEffect,useState } from 'react';
import data from '../Assets/Data/carousel-data';
import Card from './Card';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import arrow_right from '../Assets/Images/right.png';
import arrow_left from '../Assets/Images/left.png';
import rd from '../Assets/Images/right-diable.png';
import ld from '../Assets/Images/left-disable.png';

function Carousel() {
  const [pos, setpos] = useState(1);


  return (
    <Flex py={{lg:'150px'}} justifyContent={'center'}>
    <Box w={'85%'}>
      <Box className="row" mb={{lg:'60px'}}>
        <div className="col-md-6 mb-lg-5 ">
          <Text mt={{base:"30px",lg:0}} align={{base:'center',lg:'left'}} fontWeight={'600'} color={'#0E2368'} fontSize={{lg:'56px',base:'28px'}} lineHeight={{lg:'42px',base:'54px'}} className="mb-3">Latest Articles</Text>
        </div>

        <div className="col-12">
          <div
            id="carouselExampleIndicators2"
            data-interval="false"
            data-wrap="false"
            className="carousel slide"
          >
            <div className="carousel-inner">
                <div className={"carousel-item " +(pos==1?"active":"")}>
                <div className="row">
                  {
                    data && data.map(item => (
                      data.indexOf(item)<3 && (
                  <div className="col-md-4 mb-3 d-flex justify-content-center" key={data.indexOf(item)}>
                    <Card img={item.img} heading={item.heading} text={item.text} />
                  </div>                        
                      )
                    ))
                  }

                </div>
              </div>
              <div className={"carousel-item " +(pos==2?"active":"")}>
                <div className="row">
                  {
                    data && data.map(item => (
                      data.indexOf(item)>=3 && (
                  <div className="col-md-4 mb-3 d-flex justify-content-center" key={data.indexOf(item)}>
                    <Card img={item.img} heading={item.heading} text={item.text} />
                  </div>                        
                      )
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      <div className="d-flex justify-content-center ">
        <div
          className=" "
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="prev"
          onClick={()=>setpos(1)}  
          >
            {
              (pos === 1) && (
          <Image height={{lg:'29px'}} width={{lg:'28px'}} src={ld} />
              )
            }
            {
              (pos === 2) && (
                <Image height={{lg:'29px'}} width={{lg:'28px'}} src={arrow_left} />
                )
            }
        </div>
        <Text mx={'20px'} color={'#424961'} textStyle={'head'} fontSize={{lg:'22px'}} lineHeight={{lg:'27px'}} letterSpacing={'.15em'}>1/2</Text>
        <div
          className=" "
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="next"
          onClick={()=>setpos(2)}
          >
            {
              (pos === 1) && (
          <Image height={{lg:'29px'}} width={{lg:'28px'}} src={arrow_right} />
              )
            }
            {
              (pos === 2) && (
                <Image height={{lg:'29px'}} width={{lg:'28px'}} src={rd} />
                )
            }
        </div>
      </div>
      </Box>
    </Flex>
  );
}

export default Carousel;
