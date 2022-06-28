import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import Slider from 'react-slick';

const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  color: #403ae3;
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
`;

const TextWrapper = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.4rem 0 0;
`;
const Section = styled.section`
  padding: 50px 70px;
  margin: auto;
  background: white;
  max-width: 1280px;
  height: auto;
  max-height: auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
  min-height: auto;
  flex-wrap: wrap;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

const ImageWrapper = styled.div`
  width: 90%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 430px;

  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

const ButtonContainer = styled(Row)`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

const CardButton = styled.button`
  background-color: #1d609c;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;


const data = [
  {
    title: 'What our clients say',
    description:
      'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
  },
  {
    title: 'Our security ',
    description:
      'Learn more about our security systems to make sure your data is always safe',
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg",
  },
  {
    title: 'Our Team',
    description:
      'Our team consists of the best experts in the industry, learn about them',
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg",
  },
  {
    title: 'Our servers',
    description: 'Find more about hardware and software used for your service',
    image:
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
  },
  {
    title: 'Our top clients',
    description: 'We have provided services to top clients in tech industry',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
];

const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: true,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section>
      <Row>
        <Heading>
          Find more about us
        </Heading>
      </Row>
      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper>{el.title}</TextWrapper> 
            <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
    </Section>
  );
};

export default Carousel;
