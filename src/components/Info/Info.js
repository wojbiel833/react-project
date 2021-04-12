import React from 'react';
import Container from '../Container/Container';
import Hero from './../Hero/Hero';
import PropTypes from 'prop-types';
import { info } from './../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imgSrc={info.imgSrc} />
    <h2>{info.title}</h2>
    <p>{info.content}</p>
  </Container>
);
Info.propTypes = {
  titleText: PropTypes.node,
  imgSrc: PropTypes.string,
};

export default Info;
