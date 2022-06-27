import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import './test.css';
const Wrapper = styled.section`
  width: 500px;
  height: 700px;
  padding: 60px 20px;
  display: flex;
  margin: auto;
`;

const Stories = () => {
  return (
    <Wrapper>
      <div className='blur'></div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 h-100'
            src='https://i.imgur.com/gazoShk.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h5>Jane Doe</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 h-100'
            src='https://i.imgur.com/oW8Wpwi.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h5>Mary Doe</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 h-100'
            src='https://i.imgur.com/ndQx2Rg.jpg'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h5>John Doe</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};

export default Stories;
